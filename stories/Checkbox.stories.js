import { checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['medium', 'large'] }, 
    labelPosition: { control: 'inline-radio', options: ['before', 'after'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    required: { control: 'boolean', options: [ 'required', ''] }  
  },
};

export const Medium = {
    args: {
        label: 'Medium Checkbox',
        size:'medium',
        labelPosition:'after',
        disabled: '',
        required: '',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Checkbox',
        size:'large',
        labelPosition:'after',
        disabled: '',
        required: '',
    },
  };

  export const Disabled = {
    args: {
        label: 'Disabled Checkbox',
        size:'medium',
        labelPosition:'after',
        disabled: 'disabled',
        required: '',
    },
  };

  export const Before = {
    args: {
        label: 'Label Before Checkbox',
        size:'medium',
        labelPosition:'before',
        disabled: '',
        required: '',
    },
  };
  
  