declare const _default: {
    title: string;
    component: ({ label, size, allCaps, color, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
export declare const Basic: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const AllCaps: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Secondary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const Tertiary: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
export declare const CustomColor: import("@storybook/types").AnnotatedStoryFn<import("@storybook/react/dist/types-0a347bb9").R, import("../../components/MyLabel").MyLabelProps>;
