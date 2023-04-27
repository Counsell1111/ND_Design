import { fields } from './Fields';

export default {
  title: 'Components/Field',
  component: fields,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] }, 
    validate_state: { control: 'inline-radio', options: ['none', 'success', 'warning', 'error'] },   
    disabled: { control: 'boolean', options: [ 'disabled', ''] },   
    required: { control: 'boolean', options: [ 'required', ''] }   
  },
};

export const Primary = {
  args: {
      label: 'Field Placeholder',
      size:'medium',
      validate_text: '',
      validate_state: 'none',
      disabled: '',
      required: '',
  },
};

export const Small = {
    args: {
        label: 'Small Field',
        size:'small',
        validate_text: 'This is a status message',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };

export const Medium = {
    args: {
        label: 'Medium Field',
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Field',
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

  export const Disabled = {
    args: {
        label: 'Disabled field',
        size: 'medium',
        validate_text: 'This field is disabled',
        validate_state: 'none',
        disabled: 'disabled',
        required: '',
    },
  };
  