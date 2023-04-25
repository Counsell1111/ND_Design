import { combobox } from './Combobox';

export default {
  title: 'Patterns/Combobox',
  component: combobox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] }, 
    appearance: { control: 'inline-radio', options: ['outline','underline','filled-darker','filled-lighter'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] }    
  },
};

export const Primary = {
    args: {
        label: 'Primary Dropdown',
        size:'medium',
        disabled: '',
    },
  };

export const Small = {
    args: {
        label: 'Small Dropdown',
        size:'small',
        disabled: '',
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
  