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
        label: 'Default Link',
        appearance: 'default',
        disabled: '',
      },
};

export const Subtle = {
    args: {
        label: 'Default Link',
        appearance: 'subtle',
        disabled: '',
      },
};

export const Disabled = {
    args: {
        label: 'Default Link',
        appearance: 'default',
        disabled: 'disabled',
      },
};
  