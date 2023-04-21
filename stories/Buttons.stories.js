import { button } from './Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Patterns/Buttons',
  component: button,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'inline-radio', options: ['primary', 'outline', 'subtle', 'transparent'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] }         
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
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
