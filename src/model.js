import image from './imgs/1.jpg'
import {TextBlock, ImageBlock, ColumnsBlock, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Web Builder with JS', {
        tag: 'h2',
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#fff",
            padding: "1.5rem",
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            background: "linear-gradient(to right, #000, #999)",
            color: "#fff",
            padding: "1.5rem",
            'text-align': 'center'
            }
    }),
    new TextBlock('This is simple web page builded with JS',
        {
            styles: {
            background: "linear-gradient(to right, #ff0, #240)",
            color: "#fff",
            padding: "1.5rem",
            'text-align': 'center',
            'font-size': '100px'
            }
        }
    ),
    new ColumnsBlock ( ['this is columns to practices with array', 'this is columns to practices with array', 'this is columns to practices with array'], {
        styles: {
            background: "linear-gradient(to right, #099, #493)",
            color: "#fff",
            padding: "1.5rem",
            'text-align': 'center'
            } 
    }),
];
