const path = require('path');
const fs = require('fs');

const iconsFolder = path.resolve('./public/icons');
const iconNames = './src/typings/iconNames.ts';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function toPascalCase(str) {
    const components = str.split('_');
    return components.map((name) => capitalize(name)).join('');
}

function generateListOfAvailableIcons() {
    const icons = fs.readdirSync(iconsFolder).map((iconName) => {
        const clearedIconName = iconName.replace('_black_24dp', '').replace('.svg', '');
        return `${toPascalCase(clearedIconName)} = '${clearedIconName}'`;
    });
    fs.writeFileSync(iconNames, constructEnum(icons));
}

function constructEnum(icons) {
    let exportEnumString = 'export enum IconNames {\n\t';
    console.log(icons);
    exportEnumString += icons.join(',\n\t');
    exportEnumString += '\n}';
    return exportEnumString;
}

generateListOfAvailableIcons();
