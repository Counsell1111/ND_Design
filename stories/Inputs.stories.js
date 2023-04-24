import { Inputs } from './Inputs';

export default {
  title: 'Patterns/Inputs',
  component: Inputs,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] }     
  },
};

export const Primary = {
    args: {
        label: 'Placeholder',
        size:'medium',
        disabled: '',
      },
};

export const Small = {
  args: {
    label: 'Small Input',
    size: 'small',
    disabled: '',
  },
};

export const Secondary = {
    args: {
      label: 'Medium Input',
      size:'medium',
      disabled: '',
    },
  };
  
  export const Large = {
    args: {
      label: 'Large Input',
      size: 'large',
      disabled: '',
    },
  };

  export const Disabled = {
    args: {
      label: 'Disabled Input',
      size:'medium',
      disabled: 'disabled',
    },
  };
  