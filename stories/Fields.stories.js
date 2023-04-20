import { Fields } from './Fields';

export default {
  title: 'Components/Fields',
  component: Fields,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] }, 
    typer: { control: 'select', options: ['outline','underline','filled-darker','filled-lighter','filled-darker-shadow','filled-lighter-shadow'] },
    validate_state: { control: 'select', options: ['none', 'success', 'warning', 'error'] }   
  },
};

export const Small = {
    args: {

    },
  };
