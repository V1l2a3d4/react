import React, {Component} from 'react';
import Title from './Title';
import List from './List';
import Form from './Form';

class Comments extends Component{
    render(){
        return(
            <h1 class="box">
                <Title/>
                <Form/>
                <List/>
            </h1>
        )
    }
}
export default Comments;