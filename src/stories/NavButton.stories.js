import NavButton from '../components/NavButton'

export default {
    title: "Nav Button",
    component: NavButton
}

const Template = (args) => <NavButton {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Nav Button'
};

