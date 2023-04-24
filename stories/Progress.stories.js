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
      },
};

export const Medium = {
    args: {

    },
  };
  
  export const Large = {
    args: {

    },
  };

  export const Success = {
    args: {

    },
  };

  export const Warning = {
    args: {

    },
  };

  export const Error = {
    args: {
 
    },
  };