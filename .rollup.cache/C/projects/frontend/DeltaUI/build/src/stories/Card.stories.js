import { CardName } from '../components/card/card';
export default {
    title: 'Example/Card',
    argTypes: {},
};
const createCard = (args) => {
    const element = `<${CardName}> ${args.header} ${args.content}  </${CardName}>`;
    return element;
};
const Template = createCard;
export const Card = Template.bind({});
Card.args = {
    header: `<div slot="header"> Header </div>`,
    content: `<div slot="content"> Content </div>`,
};
//# sourceMappingURL=Card.stories.js.map