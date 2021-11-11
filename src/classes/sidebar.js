import { block } from '../utils';
import { ColumnsBlock, TextBlock, TitleBlock } from './blocks';

export class Sidebar {
    constructor(selector, updateSite){
        this.el = document.querySelector(selector);
        this.update = updateSite
    
        this.init()
    }

    init() {
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.addBlock.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        let newBlock

        if (type === 'text') {
            newBlock = new TextBlock(value, {styles})
        } else if (type === 'title') {
            newBlock = new TitleBlock(value, {styles})
        }

        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''

    }
}