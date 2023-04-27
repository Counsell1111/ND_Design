import { radiogroup } from './Radios';

export default {
  title: 'Components/Radios',
  component: radiogroup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },   
    layout: { control: 'inline-radio', options: ['horizontal','vertical','horizontal-stacked'] },  
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    required: { control: 'boolean', options: [ 'required', ''] }   
  },
};

export const Primary = {
  args: {
    label: 'Radio Group',
    size:'medium',
    layout:'horizontal',
    disabled: '',
    required: '',
  },
};

export const Horizontal = {
    args: {
      label: 'Horizontal Radio Group',
      size:'medium',
      layout:'horizontal',
      disabled: '',
      required: '',
    },
  };

  export const Vertical = {
    args: {
      label: 'Vertical Radio Group',
      size:'medium',
      layout:'vertical',
      disabled: '',
      required: '',
    },
  };

  export const Stacked = {
    args: {
      label: 'Stacked Radio Group',
      size:'medium',
      layout:'horizontal-stacked',
      disabled: '',
      required: '',
    },
  };

  export const Disabled = {
    args: {
      label: 'Horizontal Radio Group',
      size:'medium',
      layout:'horizontal',
      disabled: 'disabled',
      required: '',
    },
  };

