import React, {Component} from 'react';

class Item extends Component{
    render(){
        const {author, text} = this.props;
        return(
            <li class="item">
                    <header class="item__head">
                        <h3 class="item__title">{author}</h3>
                        <div class="item__action">
                            <button class="button button--small">edit</button>
                            <button class="button button--small">delete</button>
                        </div>
                    </header>
                    <p>{text}</p>
                </li>
        )
    }
}
export default Item;