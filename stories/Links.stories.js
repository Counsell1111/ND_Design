import { Links } from './Links';

export default {
  title: 'Components/Links',
  component: Links,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['subtle', 'default'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] }  
  },
};

export const Primary = {
    args: {
        label: 'Default Button',
        size:'medium',
        appearance: 'default',
        disabled: '',
      },
};

  