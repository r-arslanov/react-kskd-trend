import React, {Component} from 'react';
import './../styles/ObjButton.css';

export default class ObjButton extends Component{
    constructor(props){
        super(props);
    }
    props = {text:"", type:0};

    updateValue(type){
        console.log("update type: " + type);
        this.context.type = type;
    }

    render(){
        return( <button className="ObjBtn" onClick={this.props.onClick}>{this.props.text}</button> );
    }
}