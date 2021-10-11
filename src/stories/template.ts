import { ComponentNames } from '../components/meta';


export const TemplateComponent =
    (componentName: ComponentNames) =>
    <PropType extends {}>(args: PropType) => {
        const element = document.createElement(componentName);

        for (const arg in args) {
            element[arg as string] = args[arg];
        }
        return element;
    };
