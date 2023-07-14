import './mylabel.css';
export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;
    /**
     * Size label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Background color
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * All words capitalize
     */
    allCaps: boolean;
    /**
     * Background color select
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
