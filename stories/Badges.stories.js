import { badge } from './Badges';

export default {
  title: 'Patterns/Badges',
  component: badge,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small','tiny','extra-small','medium','large','extra-large'] }, 
    appearance: { control: 'inline-radio', options: ['filled','ghost','outline','tint'] }, 
    color: { control: 'select', options: ['brand','danger','important','informative','severe','subtle','success','warning'] },  
    shape: { control: 'inline-radio', options: ['circular','square','rounded'] },      
  },
};

export const Primary = {
    args: {
        label: '999+',
        size:'medium',
        color:'brand',
        shape:'circular',
        appearance: 'tint',
      },
};

export const Tiny = {
    args: {
        label: '',
        size:'tiny',
        color:'brand',
        shape:'circular',
        appearance: 'filled',
    },
  };

  export const Smaller = {
    args: {
        label: '',
        size:'extra-small',
        color:'brand',
        shape:'circular',
        appearance: 'filled',
    },
  };

export const Small = {
    args: {
        label: 'Small Badge',
        size:'small',
        color:'brand',
        shape:'circular',
        appearance: 'tint',
    },
  };
  

export const Medium = {
    args: {
        label: 'Medium Badge',
        size:'Medium',
        color:'brand',
        shape:'circular',
        appearance: 'tint',
    },
  };
  
  export const Large = {
    args: {
        label: 'Large Badge',
        size:'large',
        color:'brand',
        shape:'circular',
        appearance: 'tint',
    },
  };

  export const Extra = {
    args: {
        label: 'Larger Badge',
        size:'extra-large',
        color:'brand',
        shape:'circular',
        appearance: 'tint',
    },
  };