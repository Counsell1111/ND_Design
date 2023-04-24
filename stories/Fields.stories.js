import { fields } from './Fields';

export default {
  title: 'Patterns/Field',
  component: fields,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] },   
    disabled: { control: 'boolean', options: [ 'disabled', ''] },   
    required: { control: 'boolean', options: [ 'required', ''] }   
  },
};

export const Small = {
    args: {
        label: 'Field Placeholder',
        size:'small',
        validate_text: 'This is a status message',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };

export const Medium = {
    args: {
        label: 'Field Placeholder',
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };
  
  export const Large = {
    args: {
        label: 'Field Placeholder',
        size:'large',
        validate_text: 'This is a status message',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };

  export const Success = {
    args: {
        label: 'Field with success',
        size: 'medium',
        validate_text: 'Great Success, very nice!',
        validate_state: 'success',
        disabled: '',
        required: '',
    },
  };

  export const Warning = {
    args: {
        label: 'Field with warning',
        size: 'medium',
        validate_text: 'Yikes, this is a warning!',
        validate_state: 'warning',
        disabled: '',
        required: '',
    },
  };

  export const Error = {
    args: {
        label: 'Field with error',
        size: 'medium',
        validate_text: 'OMG, this field has an error!',
        validate_state: 'error',
        disabled: '',
        required: '',
    },
  };
  