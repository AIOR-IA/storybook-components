import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1'] },
        backgroundColor: { control: 'color' },
    }
} satisfies Meta<typeof MyLabel>;

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}


export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomColor = Template.bind({});
CustomColor.args = {
    size: 'h1',
    color: 'tertiary'
}