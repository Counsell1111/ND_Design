import { Tablist } from './Tablist';

export default {
  title: 'Patterns/Tablist',
  component: Tablist,
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
  