import { button } from './Buttons';

export default {
  title: 'Components/Buttons/Button',
  component: button,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['', 'primary', 'outline', 'subtle', 'transparent'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] }         
  },
};

export const Default = {
  args: {
    label: 'Default Button',
    size:'medium',
    appearance: '',
    disabled: '',
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    size:'medium',
    appearance: 'primary',
    disabled: '',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
    disabled: '',
  },
};

export const Medium = {
  args: {
    size:'medium',
    label: 'Medium Button',
    disabled: '',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
    disabled: '',
  },
};

export const Disabled = {
  args: {
    size: 'large',
    label: 'Disabled Button',
    disabled: 'disabled',
  },
};
