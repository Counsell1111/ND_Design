import { Labels } from './Labels';

export default {
  title: 'Components/Labels',
  component: Labels,
  tags: ['autodocs'],
  argTypes: {
    weight: { control: 'inline-radio', options: ['regular', 'semibold'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] },   
    required: { control: 'boolean', options: [ 'required', ''] }  
  },
};

export const Primary = {
    args: {
        label: 'Primary Label',
        size:'medium',
        weight: 'regular',
        disabled: '',
        required: '',
      },
};

export const Small = {
    args: {
        label: 'Small Label',
        size:'small',
        weight: 'regular',
        disabled: '',
        required: '',
      },
};

export const Medium = {
    args: {
        label: 'Medium Label',
        size:'medium',
        weight: 'regular',
        disabled: '',
        required: '',
      },
};

export const Large = {
    args: {
        label: 'Large Label',
        size:'large',
        weight: 'regular',
        disabled: '',
        required: '',
      },
};

export const Bold = {
    args: {
        label: 'Semibold Label',
        size:'medium',
        weight: 'semibold',
        disabled: '',
        required: '',
      },
};

export const Disabled = {
    args: {
        label: 'Disabled Label',
        size:'medium',
        weight: 'regular',
        disabled: 'disabled',
        required: '',
      },
};

export const Required = {
    args: {
        label: 'Label with custom required',
        size:'medium',
        weight: 'regular',
        disabled: '',
        required: 'required',
      },
};
