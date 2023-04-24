import { Radiogroup } from './Radios';

export default {
  title: 'Patterns/Radios',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', options: [ 'disabled', ''] }         
  },
};

export const Primary = {
  args: {
    label: 'Radio Group',
    disabled: '',
  },
};
