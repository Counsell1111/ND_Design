import { slider } from './Sliders';

export default {
  title: 'Components/Slider',
  component: slider,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'medium'] },    
    disabled: { control: 'boolean', options: [ 'disabled', ''] },
    vertical: { control: 'boolean', options: [ 'vertical', ''] },         
  },
};

export const Primary = {
  args: {
    label: 'Primary Slider',
    size:'medium',
    disabled: '',
    vertical:'',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Slider',
    disabled: '',
    vertical:'',
  },
};

export const Medium = {
  args: {
    size:'medium',
    label: 'Medium Slider',
    disabled: '',
    vertical:'',
  },
};

export const Disabled = {
  args: {
    size: 'medium',
    label: 'Disabled Slider',
    disabled: 'disabled',
    vertical:'',
  },
};

export const Vertical = {
    args: {
      size: 'medium',
      label: 'Vertical Slider',
      disabled: '',
      vertical:'vertical',
    },
  };
