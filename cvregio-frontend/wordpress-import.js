/* eslint-disable no-restricted-syntax */
// @ts-check

const fsp = require('fs').promises;

const fileContent = `<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} \n
`;

const srcDir = './dist/';

const mapping = [
    // {
    //     name: 'plugin',
    //     targetPath: '/plugins/cv-regio-plugin/',
    //     distFolder: 'cvregio-frontend',
    //     files: [
    //         { type: 'js', name: 'commons~plugin~plugin' },
    //         { type: 'js', name: 'plugin' },
    //         { type: 'css', name: 'commons~plugin~plugin' },
    //         { type: 'css', name: 'plugin' },
    //         { type: 'php', name: 'plugin' },
    //     ],
    // },
    {
        name: 'theme',
        targetPath: '/themes/cv-regio-theme/',
        distFolder: 'cvregio-frontend',
        files: [
            // { type: 'js', name: 'chunk-vendors' },
            { type: 'js', name: 'commons~plugin~theme' },
            { type: 'js', name: 'theme' },
            // { type: 'css', name: 'chunk-vendors' },
            { type: 'css', name: 'commons~plugin~theme' },
            { type: 'css', name: 'theme' },
            { type: 'php', name: 'theme' },
        ],
    },
];

async function readDir(dir) {
    let files = [];
    try {
        files = await fsp.readdir(dir);
    } catch (err) {
        console.error('Error reding directory: ', err);
        return [];
    }
    return files;
}

async function getFiles(dirs) {
    if (!dirs) {
        console.warn('No directories to read.');
        return [];
    }
    const filePromises = [];
    dirs.map(async dir => {
        filePromises.push(readDir(dir));
    });
    const filesArray = await Promise.all(filePromises);
    let files = filesArray.reduce((acc, val) => acc.concat(val), []);

    files = files.map(file => {
        // const [name, second, third = false, fourth = false] = file.split('.');
        const content = file.split('.');
        return {
            chunkName: content[0],
            type: content[content.length - 1],
            fileName: file,
        };
    });
    return files;
}

function getWpDeclaration(file, dist) {
    if (file.type === 'js') {
        return `
wp_enqueue_script('cv-frontend-${file.chunkName}', content_url() . '${dist +
            file.fileName}', array(), '1.0', true );
`;
    }
    return `
wp_register_style(
    'cv-frontend-${file.chunkName}',
    content_url() . '${dist + file.fileName}',
    array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-${file.chunkName}');
`;
}

async function copyFile(src, target) {
    try {
        await fsp.copyFile(src, target);
        console.log(`Copied file: ${src} -> ${target} `);
    } catch (err) {
        console.error('Error on copying file: ', err);
    }
}

async function clearFolder(dir) {
    try {
        await fsp.mkdir(dir);
        console.log('Direction cleaned');
    } catch {
        console.log(`Direction ${dir} already exsits`);
    }
    try {
        const files = await fsp.readdir(dir);
        files.forEach(async file => {
            try {
                await fsp.unlink(dir + file);
            } catch (err) {
                console.error(`Error on deleting file ${file}: `, err);
            }
        });
        console.log(`Direction ${dir} cleaned`);
    } catch (err) {
        console.error(`Error clearing dir ${dir} : `, err);
    }
}

async function main(srcDirection) {
    const files = await getFiles([`${srcDirection}`, `${srcDirection}`]);
    for (const mapItem of mapping) {
        console.log();
        console.log(`Start processing for ${mapItem.name}`);
        const path = `./..${mapItem.targetPath}${mapItem.distFolder}/`;
        // eslint-disable-next-line no-await-in-loop
        await clearFolder(path);
        let wpdeclaration = '';
        for (const mapFile of mapItem.files) {
            const resultFile = files.find(
                file => file.chunkName === mapFile.name && file.type === mapFile.type
            );
            if (resultFile) {
                copyFile(`${srcDir}/${resultFile.fileName}`, path + resultFile.fileName);
                wpdeclaration += getWpDeclaration(
                    resultFile,
                    `${mapItem.targetPath + mapItem.distFolder}/`
                );
            }
        }
        const wpFileContent = fileContent + wpdeclaration;
        try {
            // eslint-disable-next-line no-await-in-loop
            await fsp.writeFile(`${path}frontend-include.php`, wpFileContent);
            console.log(`Written succesfully to ${mapItem.name}.`);
        } catch (err) {
            console.error(`Error on writing file to : ${mapItem.name}`, err);
        }
    }
}

main(srcDir);
