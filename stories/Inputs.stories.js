import { Inputs } from './Inputs';

export default {
  title: 'Components/Inputs',
  component: Inputs,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }       
  },
};

export const Primary = {
    args: {
        size:'medium',
      },
};

export const Secondary = {
    args: {
      size:'medium',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
    },
  };
  