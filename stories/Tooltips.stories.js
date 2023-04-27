import { tooltip } from './Tooltips';

export default {
  title: 'Components/Tooltip',
  component: tooltip,
  tags: ['autodocs'],
  argTypes: {  
    positioning: { control: 'select', options: ['above-start','above','above-end','before-top','after-top','before','after','before-bottom','after-bottom','below-start','below','below-end'] },
    appearance: { control: 'inline-radio', options: ['inverted','normal'] },
    relationship: { control: 'inline-radio', options: ['label','description','inaccessible'] },
    withArrow: { control: 'boolean', options: [ 'withArrow', ''] },
  },
};

export const Primary = {
  args: {
    label: 'Tooltip',
    positioning:'above',
    appearance: 'normal',
    relationship: 'label',
    withArrow: '',
  },
};

export const Arrow = {
    args: {
      label: 'Tooltip',
      positioning:'above',
      appearance: 'normal',
      relationship: 'label',
      withArrow: 'withArrow',
    },
  };

  export const Inverted = {
    args: {
      label: 'Tooltip',
      positioning:'above',
      appearance: 'inverted',
      relationship: 'label',
      withArrow: '',
    },
  };