import { checkbox } from './Checkbox';

export default {
  title: 'Patterns/Checkbox',
  component: checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['medium', 'large'] }, 
    disabled: { control: 'boolean', options: [ 'disabled', ''] }    
  },
};

export const Medium = {
    args: {
        label: 'Medium Checkbox',
        size:'medium',
        disabled: '',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Checkbox',
        size:'large',
        disabled: '',
    },
  };

  export const Disabled = {
    args: {
        label: 'Disabled Checkbox',
        size:'medium',
        disabled: 'disabled',
    },
  };
  