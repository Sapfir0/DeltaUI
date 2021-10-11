import { ComponentNames } from "../components/meta";

export const TemplateComponent = (componentName: ComponentNames) => <PropType extends {}>(args: PropType) => {
    const element = document.createElement(componentName);

    for (const arg in args) {
        element[arg] = args[arg];
    }
    return element;
};