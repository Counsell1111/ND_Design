import { Inputs } from './Inputs';

export default {
  title: 'Patterns/Inputs',
  component: Inputs,
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
      },
};

export const Secondary = {
    args: {
      label: 'Loading',
      size:'medium',
    },
  };
  
  export const Large = {
    args: {
      label: 'Loading',
      size: 'large',
    },
  };
  
  export const Small = {
    args: {
      label: 'Loading',
      size: 'small',
    },
  };
  