export const TemplateComponent = (componentName) => (args) => {
    const element = document.createElement(componentName);
    for (const arg in args) {
        element[arg] = args[arg];
    }
    return element;
};
//# sourceMappingURL=template.js.map