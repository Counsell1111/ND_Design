import { Progress } from './Progress';

export default {
  title: 'Patterns/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: { 
    value: { control: { type: 'number', min: 0.1, max: 1 } },
    size: { control: 'select', options: ['medium', 'large'] }, 
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] },   
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
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '0.7',
    },
  };
  
  export const Large = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '0.7',
    },
  };

  export const Success = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '1',
    },
  };

  export const Warning = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '0.5',
    },
  };

  export const Error = {
    args: {
        size:'medium',
        validate_text: 'This is a status message',
        validate_state: 'none',
        value: '0.4',
    },
  };