import { Spinbutton } from './Spinbutton';

export default {
  title: 'Patterns/SpinButton',
  component: Spinbutton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] }, 
    appearance: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter'] },
    disabled: { control: 'boolean', options: [ 'disabled', ''] }     
  },
};

export const Primary = {
    args: {
        label: 'Primary Spinbutton',
        size:'medium',
        disabled: '',
      },
};

export const Small = {
  args: {
    label: 'Small SpinButton',
    size: 'small',
    disabled: '',
  },
};

export const Medium = {
    args: {
      label: 'Medium SpinButton',
      size:'medium',
      disabled: '',
    },
  };

  export const Disabled = {
    args: {
      label: 'Disabled SpinButton',
      size:'medium',
      disabled: 'disabled',
    },
  };
  