// @ts-check

const fsp = require("fs").promises;

const pluginDir = "cv-blocks/libs/";
const themeDir = "cv-regio-theme";

let fileContent = `<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} \n
`;

/**
 * @param {string} name
 * @param {string} type TOOD: add source map option sourceMap = false
 * @param {string} dist
 */
async function getFileAndCopy(name, type, dist) {
  const fileExp = new RegExp(name + '\\.\\w*\\.'+ type + '$');
  const dir = './dist/' + type;
  try {
    let files = await fsp.readdir(dir);
    const file = files.filter(file => {
      return file.match(fileExp);
    })[0];
    await fsp.copyFile('./dist/' + type + '/' + file, dist + file);
    return file;
  } catch(err) {
    console.error('Error on file read and copy: ', err);
    return;
  }
  return;
}

/**
 * @param {string} content
 */
async function writeFile(content) {
  const appDist = 'frontend/';
  const pluginDir = './../plugins/cv-blocks/';

  try {
    await fsp.mkdir(pluginDir + appDist);
    console.log('Direction cleaned');
  } catch {
    console.log('Direction frontend already exsits');
  }
  try {
    let files = await fsp.readdir(pluginDir + appDist);
    files.forEach(async file => {
      try {
        await fsp.unlink(pluginDir + appDist + file);
      } catch(err) {
        console.error('Error on deleting file ' + file + ': ', err);
      }
    });
    console.log('Direction cleaned');
    
  } catch(err) {
    console.error('Error clearing dir: ', err);
  }
  
  const vendorCss = await getFileAndCopy('chunk-vendors', 'css', pluginDir + appDist);
  content +=`
wp_register_style(
  'cv-frontend-vendor-css',
  plugins_url( '${appDist + vendorCss}', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
wp_enqueue_style('cv-frontend-vendor-css');
  `;
  
  const appCss = await getFileAndCopy('app', 'css', pluginDir + appDist);
  content +=`
wp_enqueue_style(
  'cv-frontend-app-css',
  plugins_url( '${appDist + appCss}', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
  `;
      
  const appJs = await getFileAndCopy('app', 'js', pluginDir + appDist);
  content +=`
wp_enqueue_script('cv-frontend-app-js', plugins_url( '${appDist + appJs}', dirname( __FILE__ )), array(), '1.0', true );
  `;
  
  const vendorJs = await getFileAndCopy('chunk-vendors', 'js', pluginDir + appDist);
  content += `
wp_register_script('cv-frontend-vendor-js', plugins_url( '${appDist + vendorJs}', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-frontend-vendor-js');
  `;

  try {
    await fsp.writeFile( pluginDir + appDist + "frontend-include.php", content);
    console.log("Write app file successfull.");
  } catch(err) {
    console.error('Error on writing file: ', err);
  }
}

writeFile(fileContent);
//#region app

//#endregion app
