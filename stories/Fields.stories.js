import { Fields } from './Fields';

export default {
  title: 'Components/Fields',
  component: Fields,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow'] },
  },
};

export const Small = {
    args: {
        label: 'Field Placeholder',
        size: 'small',
    },
  };

export const Medium = {
    args: {
        label: 'Field Placeholder',
        size:'medium',
    },
  };
  
  export const Large = {
    args: {
        label: 'Field Placeholder',
        size:'large',
    },
  };
  