import { switchs } from './Switchs';

export default {
  title: 'Patterns/Switch',
  component: switchs,
  tags: ['autodocs'],
  argTypes: {  
    disabled: { control: 'boolean', options: [ 'disabled', ''] }         
  },
};

export const Primary = {
  args: {
    label: 'Button',
    disabled: '',
  },
};