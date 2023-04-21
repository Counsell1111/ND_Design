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
    icons: { control: 'boolean', options: [ 'icon={<CalendarMonth />}', ''] },
  },
};

export const Primary = {
    args: {
      size:'medium',
      appearance: 'subtle',
      disabled: '',
      vertical:'',
      icons:'',
    },
  };
  
  export const Small = {
    args: {
      size: 'small',
      disabled: '',
      vertical:'',
      icons:'',
    },
  };

  export const Medium = {
    args: {
      size:'medium',
      disabled: '',
      vertical:'',
      icons:'',
    },
  };
  
  export const Large = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'',
      icons:'',
    },
  };

  export const Disabled = {
    args: {
      size: 'medium',
      disabled: 'disabled',
      vertical:'',
      icons:'',
    },
  };

  export const Icons = {
    args: {
      size: 'medium',
      disabled: '',
      vertical:'',
      icons:'',
    },
  };

  export const Vertical = {
    args: {
      size: 'large',
      disabled: '',
      vertical:'vertical',
      icons:'icon={<CalendarMonth />}',
    },
  };