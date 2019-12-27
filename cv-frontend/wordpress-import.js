// @ts-check

const fsp = require('fs').promises;

let fileContent = `<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} \n
`;

const srcDir = './dist/';

const mapping = [
    {
        name: 'plugin',
        targetPath: '/plugins/cv-regio-plugin/',
        distFolder: 'cv-frontend',
        files: [
            { type: 'js', name: 'chunk-vendors' },
            { type: 'js', name: 'chunk-common' },
            { type: 'js', name: 'plugin' },
            { type: 'css', name: 'chunk-vendors' },
            { type: 'css', name: 'chunk-common' },
            { type: 'css', name: 'plugin' },
        ],
    },
    {
        name: 'theme',
        targetPath: '/themes/cv-regio-theme/',
        distFolder: 'cv-frontend',
        files: [
            { type: 'js', name: 'chunk-vendors' },
            { type: 'js', name: 'chunk-common' },
            { type: 'js', name: 'app' },
            { type: 'css', name: 'chunk-vendors' },
            { type: 'css', name: 'chunk-common' },
            { type: 'css', name: 'app' },
        ],
    },
];

main(srcDir);

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
        return;
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
        let files = await fsp.readdir(dir);
        files.forEach(async file => {
            try {
                await fsp.unlink(dir + file);
            } catch (err) {
                console.error('Error on deleting file ' + file + ': ', err);
            }
        });
        console.log(`Direction ${dir} cleaned`);
    } catch (err) {
        console.error(`Error clearing dir ${dir} : `, err);
    }
}

async function main(srcDirection) {
    const files = await getFiles([srcDirection + 'css', srcDirection + 'js']);
    for (const mapItem of mapping) {
        console.log();
        console.log(`Start processing for ${mapItem.name}`);
        const path = './..' + mapItem.targetPath + mapItem.distFolder + '/';
        await clearFolder(path);
        let wpdeclaration = '';
        for (const mapFile of mapItem.files) {
            const file = files.find(
                file => file.chunkName === mapFile.name && file.type === mapFile.type
            );
            if (file) {
                copyFile(srcDir + file.type + '/' + file.fileName, path + file.fileName);
                wpdeclaration += getWpDeclaration(
                    file,
                    mapItem.targetPath + mapItem.distFolder + '/'
                );
            }
        }
        const wpFileContent = fileContent + wpdeclaration;
        try {
            await fsp.writeFile(path + 'frontend-include.php', wpFileContent);
            console.log(`Written succesfully to ${mapItem.name}.`);
        } catch (err) {
            console.error(`Error on writing file to : ${mapItem.name}`, err);
        }
    }
}

async function getFiles(dirs) {
    if (!dirs) {
        console.warn('No directories to read.');
        return [];
    }
    let files = [];
    for (let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        files = files.concat(await readDir(dir));
    }
    files = files.map(file => {
        const content = file.split('.');
        return {
            chunkName: content[0],
            type: content.includes(3) ? content[2] + content[3] : content[2],
            fileName: file,
        };
    });
    return files;
}

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
