import { spinner } from './Spinners';

export default {
  title: 'Patterns/Spinner',
  component: spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small','tiny','extra-small','medium','large','extra-large','huge'] }, 
    appearance: { control: 'inline-radio', options: ['primary','inverted'] }, 
    labelPosition: { control: 'inline-radio', options: ['before','after','above','below'] },      
  },
};

export const Primary = {
    args: {
        label: 'Loading',
        size:'medium',
        labelPosition:'after',
      },
};

export const Tiny = {
    args: {
      label: 'Loading Tiny',
      size: 'tiny',
      labelPosition:'after',
    },
  };

  export const Smaller = {
    args: {
      label: 'Loading Extra Small',
      size: 'extra-small',
      labelPosition:'after',
    },
  };

export const Small = {
    args: {
      label: 'Loading Small',
      size: 'small',
      labelPosition:'below',
    },
  };
  

export const Medium = {
    args: {
      label: 'Loading Medium',
      size:'medium',
      labelPosition:'below',
    },
  };
  
  export const Large = {
    args: {
      label: 'Loading Large',
      size: 'large',
      labelPosition:'below',
    },
  };

  export const Extra = {
    args: {
      label: 'Loading Extra Large',
      size: 'extra-large',
      labelPosition:'below',
    },
  };

  export const Huge = {
    args: {
      label: 'Loading huge',
      size: 'huge',
      labelPosition:'below',
    },
  };