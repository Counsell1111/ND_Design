import { checkbox } from './Checkbox';

export default {
  title: 'Patterns/Checkbox',
  component: checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
  },
};

export const Medium = {
    args: {
        label: 'Medium Dropdown',
        size:'medium',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Dropdown',
        size:'large',
    },
  };
  