import { Tablist } from './Tablist';

export default {
  title: 'Components/Tablist',
  component: Tablist,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['transparent', 'subtle'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    vertical: { control: 'boolean', options: [ 'vertical', ''] },
  },
};

export const Primary = {
    args: {
      size:'medium',
      appearance: 'subtle',
      disabled: '',
      vertical:'',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      disabled: '',
      vertical:'',
    },
  };

  export const Medium = {
    args: {
      size:'medium',
      disabled: '',
      vertical:'',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'',
    },
  };

  export const Disabled = {
    args: {
      size: 'medium',
      disabled: 'disabled',
      vertical:'',
    },
  };

  export const Vertical = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'vertical',
    },
  };