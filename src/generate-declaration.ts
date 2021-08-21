import { readdir, readFile, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';

type Declaration = { name: string; className: string };

const componentFolder = join(__dirname, 'components');
readdir(componentFolder, (err, files) => {
    const declarations: Declaration[] = [];
    files.forEach((file) => {
        const fullPath = join(componentFolder, file);
        const isDir = statSync(fullPath).isDirectory();

        if (!isDir) {
            const data = readFileSync(fullPath, 'utf8')
            const componentName = data.match(new RegExp(`componentName = '(.+)'`));
                const className = data.match(new RegExp(`class (\\w+) extends \\w+`));
                
                if (componentName && className) {
                    declarations.push({ name: componentName[1], className: className[1] });
                }
        }
    });
    console.log(declarations);

    const declarationFileData = `declare global {
        interface HTMLElementTagNameMap {
            ${declarations.map((el) => `'${el.name}': ${el.className}`)}
        }
    }`;

    const cssModulesRules = readFileSync('./src/modules.d.ts')

    writeFileSync('./src/globals.d.ts', cssModulesRules + declarationFileData);
});
