import { Labels } from './Labels';

export default {
  title: 'Components/Labels',
  component: Labels,
  tags: ['autodocs'],
  argTypes: {
    weight: { control: 'inline-radio', options: ['regular', 'semibold'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] } 
  },
};

export const Primary = {
    args: {
        label: 'Default Label',
        size:'medium',
        weight: 'regular',
        disabled: '',
        required: '',
      },
};
