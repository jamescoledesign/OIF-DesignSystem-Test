import Button from '../components/Button'

export default {
    title: "Button",
    component: Button
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Ghost = Template.bind({});

Primary.args = {
    className: 'primary-button',
    label: 'Primary Button',
    arrowClass: 'arrow-white'
};

Ghost.args = {
    className: 'ghost-button',
    label: 'Ghost Button',
    arrowClass: 'arrow-gray'
};
