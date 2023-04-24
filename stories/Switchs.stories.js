import { switchs } from './Switchs';

export default {
  title: 'Patterns/Switch',
  component: switchs,
  tags: ['autodocs'],
  argTypes: {  
    labelPosition: { control: 'inline-radio', options: ['before', 'after', 'above'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    checked: { control: 'boolean', options: [ 'checked', ''] },
    required: { control: 'boolean', options: [ 'required', ''] }      
  },
};

export const Primary = {
  args: {
    labelPosition:'after',
    label: 'Primary Switch',
    disabled: '',
    required: '',
    checked: '',
  },
};

export const Before = {
  args: {
    labelPosition:'before',
    label: 'Label Before Switch',
    disabled: '',
    required: '',
    checked: '',
  },
};

export const After = {
  args: {
    labelPosition:'after',
    label: 'Label After Switch',
    disabled: '',
    required: '',
    checked: '',
  },
};

export const Above = {
  args: {
    labelPosition:'above',
    label: 'Label Above Switch',
    disabled: '',
    required: '',
    checked: '',
  },
};

export const Disabled = {
  args: {
    labelPosition:'after',
    label: 'Disabled Switch',
    disabled: 'disabled',
    required: '',
    checked: 'checked',
  },
};