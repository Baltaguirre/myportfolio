import React , { Component} from 'react';
import {createPortal} from 'react-dom';
import './Modal.css'


export default class  Modal extends Component {
render(){
    return createPortal(
        <div className='style' onClick={this.props.onClick}>
{this.props.children}
        </div>,
document.getElementById('modal_root')
    )
}
}