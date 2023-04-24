import { radiogroup } from './Radios';

export default {
  title: 'Patterns/Radios',
  component: radiogroup,
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
