import { radiogroup } from './Radios';

export default {
  title: 'Patterns/Radios',
  component: radiogroup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },   
    layout: { control: 'inline-radio', options: ['horizontal','vertical','horizontal-stacked'] },  
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
  },
};

export const Primary = {
  args: {
    label: 'Radio Group',
    size:'medium',
    layout:'horizontal',
    disabled: '',
  },
};
