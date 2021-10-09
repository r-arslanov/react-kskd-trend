import React, {Component} from 'react';
import ObjButton from './ObjButton';

import './../styles/ObjList.css';

export default class ObjList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ObjListContainer">
                <ObjButton onClick={() => this.props.bindClick(1)} text="One" />
                <ObjButton onClick={() => this.props.bindClick(2)} text="two" />
                <ObjButton onClick={() => this.props.bindClick(3)} text="three" />
                <ObjButton onClick={() => this.props.bindClick(4)} text="four" />
            </div>
        );
    }
}