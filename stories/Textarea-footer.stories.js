import { textarea_footer } from './Textarea_footer';

export default {
  title: 'Components/TextArea/TextArea Footer',
  component: textarea_footer,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] }, 
    validate_state: { control: 'inline-radio', options: ['none', 'success', 'warning', 'error'] },   
    appearance: { control: 'select', options: ['outline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] },   
    required: { control: 'boolean', options: [ 'required', ''] }     
  },
};

export const Primary = {
    args: {
        label: 'Textarea Placeholder',
        size:'medium',
        validate_text: '',
        validate_state: 'none',
        disabled: '',
        required: '',
    },
  };
  
  export const Small = {
      args: {
          label: 'Small Textarea',
          size:'small',
          validate_text: 'This is a status message',
          validate_state: 'none',
          disabled: '',
          required: '',
      },
    };
  
  export const Medium = {
      args: {
          label: 'Medium Textarea',
          size:'medium',
          validate_text: 'This is a status message',
          validate_state: 'none',
          disabled: '',
          required: '',
      },
    };
    
    export const Large = {
      args: {
          label: 'Large Textarea',
          size:'large',
          validate_text: 'This is a status message',
          validate_state: 'none',
          disabled: '',
          required: '',
      },
    };
  
    export const Success = {
      args: {
          label: 'Textarea with success',
          size: 'medium',
          validate_text: 'Great Success, very nice!',
          validate_state: 'success',
          disabled: '',
          required: '',
      },
    };
  
    export const Warning = {
      args: {
          label: 'Textarea with warning',
          size: 'medium',
          validate_text: 'Yikes, this is a warning!',
          validate_state: 'warning',
          disabled: '',
          required: '',
      },
    };
  
    export const Error = {
      args: {
          label: 'Textarea with error',
          size: 'medium',
          validate_text: 'OMG, this textarea has an error!',
          validate_state: 'error',
          disabled: '',
          required: '',
      },
    };
  
    export const Disabled = {
      args: {
          label: 'Disabled Textarea',
          size: 'medium',
          validate_text: 'This textarea is disabled',
          validate_state: 'none',
          disabled: 'disabled',
          required: '',
      },
    };
    
  