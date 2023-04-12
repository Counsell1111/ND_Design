import { Buttons } from './Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Buttons',
  component: Buttons,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    appearance: { control: 'select', options: ['primary', 'outline', 'subtle', 'transparent'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] }               
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    appearance: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
