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
        size:'Medium',
      },
};

export const Small = {
    args: {
        label: 'Small Dropdown',
        size:'Small',
    },
  };

export const Medium = {
    args: {
        label: 'Medium Dropdown',
        size:'Medium',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Dropdown',
        size:'Large',
    },
  };
  