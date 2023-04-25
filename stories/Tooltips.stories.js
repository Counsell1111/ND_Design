import { tooltip } from './Tooltips';

export default {
  title: 'Patterns/Tooltip',
  component: tooltip,
  tags: ['autodocs'],
  argTypes: {  
    positioning: { control: 'select', options: ['above-start','above','above-end','before-top','after-top','before','after','before-bottom','after-bottom','below-start','below','below-end'] },
    appearance: { control: 'inline-radio', options: ['inverted','normal'] },
    relationship: { control: 'inline-radio', options: ['label','description','inaccessible'] },
    withArrow: { control: 'boolean', options: [ 'disabled', ''] },
  },
};

export const Primary = {
  args: {
    positioning:'above',
    label: 'Tooltip',
    appearance: 'normal',
    relationship: 'label',
    withArrow: '',
  },
};