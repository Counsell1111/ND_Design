import { Progress } from './Progress';

export default {
  title: 'Patterns/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: { 
    value: { control: { type: 'number', min: 0.0, max: 1.0 } },
    size: { control: 'inline-radio', options: ['medium', 'large'] }, 
    validate_state: { control: 'inline-radio', options: ['none', 'success', 'warning', 'error'] },   
  },
};

export const Primary = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '0.7',
      },
};

export const Medium = {
    args: {
        size:'medium',
        validate_text: 'This is a status message for a medium progress bar',
        validate_state: 'none',
        value: '0.7',
    },
  };
  
  export const Large = {
    args: {
        size:'large',
        validate_text: 'This is a status message for a large progress bar',
        validate_state: 'none',
        value: '0.7',
    },
  };

  export const Success = {
    args: {
        size:'medium',
        validate_text: 'Great Success, very nice! Upload complete!',
        validate_state: 'success',
        value: '1',
    },
  };

  export const Warning = {
    args: {
        size:'medium',
        validate_text: 'Yikes, this is a warning!',
        validate_state: 'warning',
        value: '0.5',
    },
  };

  export const Error = {
    args: {
        size:'medium',
        validate_text: 'OMG, this upload has an error! Upload failed!',
        validate_state: 'error',
        value: '0.4',
    },
  };