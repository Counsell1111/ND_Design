import { text } from './Fonts';

export default {
  title: 'Foundations/Typography/Text',
  component: text,
  tags: ['autodocs'],
  argTypes: {  
    size: { control: 'inline-radio', options: ['100','200','300','400','500','600','700','800','900','1000'] }, 
    weight: { control: 'inline-radio', options: ['medium','regular','semibold','bold'] },   
    font: { control: 'inline-radio', options: ['base','numeric','monospace'] },
    align: { control: 'inline-radio', options: ['center','start','justify','end'] },     
    underline: { control: 'boolean', options: [ 'underline', ''] },  
    strikethrough: { control: 'boolean', options: [ 'strikethrough', ''] },  
    italic: { control: 'boolean', options: [ 'italic', ''] }, 
    wrap: { control: 'boolean', options: [ 'true', 'false'] },  
    truncate: { control: 'boolean', options: [ 'truncate', ''] }, 
  },
};

export const Primary = {
    args: {
        label: 'This is some text!',
        size: '100',
        weight: 'regular',
        align: 'center',
        font: 'base',
        wrap: 'false',
        italic:'',
        underline: '',
        strikethrough: '',
        truncate:'',
    },
  };