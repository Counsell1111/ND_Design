import { Tablist } from './Tablist';

export default {
  title: 'Patterns/Tablist',
  component: Tablist,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['transparent', 'subtle'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    vertical: { control: 'boolean', options: [ 'vertical', ''] },
    icon: { control: 'boolean', options: [ 'icon={<CalendarMonth />', ''] },
  },
};

export const Primary = {
    args: {
      size:'medium',
      appearance: 'subtle',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      disabled: '',
      vertical:'',
      icon:'',
    },
  };

  export const Medium = {
    args: {
      size:'medium',
      disabled: '',
      vertical:'',
      icon:'',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'',
      icon:'',
    },
  };

  export const Disabled = {
    args: {
      size: 'medium',
      disabled: 'disabled',
      vertical:'',
      icon:'',
    },
  };

  export const Icons = {
    args: {
      size: 'medium',
      disabled: '',
      vertical:'',
      icon:'',
    },
  };

  export const Vertical = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'vertical',
      icon:'icon={<CalendarMonth />',
    },
  };