import { Inputs } from './Inputs';

export default {
  title: 'Patterns/Inputs',
  component: Inputs,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow'] }       
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
  