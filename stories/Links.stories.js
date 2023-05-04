import { Links } from './Links';

export default {
  title: 'Components/Links',
  component: Links,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['subtle', 'default'] },  
    disabled: { control: 'boolean', options: [ 'disabled', ''] }  
  },
};

export const Primary = {
    args: {
        label: 'Default Button',
        appearance: 'default',
        disabled: '',
      },
};

  