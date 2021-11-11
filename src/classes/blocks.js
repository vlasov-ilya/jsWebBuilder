import {col, row, css} from '../utils'

class Block {
    constructor(value, options) {
        (this.value = value), (this.options = options);
    }

    toHTML() {
        throw new Error('you need to Render toHTML() method');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        //this code is the same as
        const { tag = 'h1', styles } = this.options;
        //this code
        // const tag = block.options.tag ?? 'h1'
        // const styles = block.options.styles
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return col(`<img src="${this.value}"/>`, css(this.options.styles));
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        //this is same as map(item => col(item)
        const html = this.value.map(col).join('');
        return row(html, css(this.options.styles));
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}
