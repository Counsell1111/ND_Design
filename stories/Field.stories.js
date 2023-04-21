import { field } from './Field';

export default {
  title: 'Patterns/Field',
  component: field,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] }   
  },
};

export const Small = {
    args: {
        label: 'Field Placeholder',
        size:'small',
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

  export const Success = {
    args: {
        label: 'Field with success',
        size: 'medium',
        validate_text: 'Great Success, very nice!',
        validate_state: 'success',
    },
  };

  export const Warning = {
    args: {
        label: 'Field with warning',
        size: 'medium',
        validate_text: 'Yikes, this is a warning!',
        validate_state: 'warning',
    },
  };

  export const Error = {
    args: {
        label: 'Field with error',
        size: 'medium',
        validate_text: 'OMG, this field has an error!',
        validate_state: 'warning',
    },
  };
  