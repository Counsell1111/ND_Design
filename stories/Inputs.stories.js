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
        label: 'Placeholder',
        size:'medium',
      },
};

export const Secondary = {
    args: {
      label: 'Placeholder',
      size:'medium',
    },
  };
  
  export const Large = {
    args: {
      label: 'Placeholder',
      size: 'large',
    },
  };
  
  export const Small = {
    args: {
      label: 'Placeholder',
      size: 'small',
    },
  };
  