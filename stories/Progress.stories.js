import { Progress } from './Progress';

export default {
  title: 'Patterns/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: { 
    size: { control: 'select', options: ['medium', 'large'] }, 
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] },   
  },
};

export const Primary = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
      },
};

export const Medium = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };
  
  export const Large = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };

  export const Success = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };

  export const Warning = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };

  export const Error = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
    },
  };