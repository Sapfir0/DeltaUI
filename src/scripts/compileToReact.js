const path = require('path');
const fs = require('fs');

const iconsFolder = path.resolve('./src/components');
const iconNames = './src/typings/iconNames.ts';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function toPascalCase(str) {
    const components = str.split('_');
    return components.map((name) => capitalize(name)).join('');
}

const blackList = ['charts']

function generateListOfAvailableIcons() {
    const icons = fs.readdirSync(iconsFolder).map((filename) => {
        if (!filename.endsWith('.ts') && !blackList.includes(filename)) {
            const file = fs.readFileSync(path.join(iconsFolder, filename, `${filename}.ts`), 'utf-8')
            console.log(filename);
            console.log(file);
        }
    });
}

generateListOfAvailableIcons();
