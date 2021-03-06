import React, {Component} from 'react';
import './../styles/ObjButton.css';

export default class ObjButton extends Component{
	props = {text:"", type:0, onclick: ()=>{}};

	constructor(props){
		super(props);
		this.props = props;
	}

	updateValue(type){
		console.log("update type: " + type);
		this.context.type = type;
	}

	render(){
		return( <button className="ObjBtn" onClick={this.props.onClick}>{this.props.text}</button> );
	}
}