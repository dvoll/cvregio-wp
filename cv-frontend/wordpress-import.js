// @ts-check

const fsp = require("fs").promises;

const pluginDir = "cv-blocks/libs/";
const themeDir = "cv-regio-theme";

const fileStart = `<?php
/* generated */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} \n
`;

async function wpImport() {
  console.log("Start Wordpress import.");

  try {
    let jsFiles = await fsp.readdir("./dist/js");
    jsFiles = jsFiles.filter(file => {
      return file.match(/\.js$/);
    });

    const cssFiles = await fsp.readdir("./dist/css");

    const jsFileListString = jsFiles.reduce((prev, curr, index) => {
      fsp.copyFile('./dist/js/' + curr, './../plugins/cv-blocks/libs/' + curr)
        .then(() => console.log('copied ' + curr));
      const enqueueString = `
wp_register_script('cv-blocks-frontend-js-${index}', plugins_url( 'cv-blocks/libs/${curr}', dirname( __FILE__ )), array(), '1.0', true );
wp_enqueue_script('cv-blocks-frontend-js-${index}');  
      `;
      return (prev += enqueueString);
    }, "");

    const cssFileListString = cssFiles.reduce((prev, curr, index) => {
      fsp.copyFile('./dist/css/' + curr, './../plugins/cv-blocks/libs/' + curr)
        .then(() => console.log('copied ' + curr));
      const enqueueString = `
wp_enqueue_style(
  'cv-blocks-frontend-css-${index}',
  plugins_url( 'cv-blocks/libs/${curr}', dirname( __FILE__ ) ),
  array( 'wp-editor' )
);
      `;
      return (prev += enqueueString);
    }, "");

    await fsp.writeFile("./../plugins/cv-blocks/frontend-include.php", fileStart + jsFileListString + cssFileListString);

    console.log("Wordpress import successfull.");
  } catch (error) {
    console.error("Wordpress import error", error);
  }
}

wpImport();

// fs.readdirSync("./dist/js").forEach(file => {
//   console.log(file);
//   files.push(file);
// });

// const fileEnd = '';

// fs.writeFile("./frontend.php", fileStart + fileSlistString, err => {
//   if (err) {
//     console.error("Wordpress import error", err);
//     return;
//   }

//   console.log("Wordpress import sucessfull.");
// });
