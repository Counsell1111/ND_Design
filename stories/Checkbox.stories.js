import { checkbox } from './Checkbox';

export default {
  title: 'Patterns/Checkbox',
  component: checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['medium', 'large'] }, 
    disabled: { control: 'boolean', options: [ 'disabled', ''] }    
  },
};

export const Medium = {
    args: {
        label: 'Medium Dropdown',
        size:'medium',
        disabled: '',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Dropdown',
        size:'large',
        disabled: '',
    },
  };

  export const Disabled = {
    args: {
        label: 'Medium Dropdown',
        size:'medium',
        disabled: 'disabled',
    },
  };
  