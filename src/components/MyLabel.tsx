import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
     * Label contents
     */
    label: string;

    /**
     * Size label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3'

    /**
     * Background color
     */
    color: 'primary' | 'secondary' | 'tertiary'
    
    /**
     * All words capitalize
     */
    allCaps: boolean

    /**
     * Background color select 
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size= 'normal',
    allCaps = false,
    color = 'primary',
    backgroundColor
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ backgroundColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
