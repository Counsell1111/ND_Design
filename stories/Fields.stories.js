import { Fields } from './Fields';

export default {
  title: 'Components/Fields',
  component: Fields,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter'] },
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] }   
  },
};

export const Small = {
    args: {
        label: 'Field Placeholder',
        size: 'small',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };

export const Medium = {
    args: {
        label: 'Field Placeholder',
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };
  
  export const Large = {
    args: {
        label: 'Field Placeholder',
        size:'large',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };
  