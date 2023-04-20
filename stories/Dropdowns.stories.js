import { Dropdowns } from './Dropdowns';

export default {
  title: 'Components/Dropdowns',
  component: Dropdowns,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter'] }   
  },
};

export const Primary = {
    args: {
        label: 'Primary Dropdown',
        size:'medium',
      },
};

export const Small = {
    args: {
        label: 'Small Dropdown',
        size:'small',
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
  