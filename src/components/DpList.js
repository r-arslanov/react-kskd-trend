import React, {Component} from 'react';
import './../styles/DpList.css';

export default class DpList extends Component{
    state = {
        names: [],
        type: 0
    }

    constructor(props){
        super(props);
    }

    getNames(cbNames){
        fetch("http://my-develop.ddns.net/names.php")
            .then(raw => {
                return raw.json();
            }).then(response=>{
                cbNames(response);
            });
    }

    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(){
        if(this.state.type !== this.props.type){
            this.getNames((response)=>{
                this.setState(
                    {
                        names:response.names,
                        type: this.props.type
                    });
            });
        }
    }
    
    render(){
        return(
            <div className="DpListContainer">
                <ul>
                    {this.state.names.map(dp => <li>{dp.name}</li> )}
                </ul>
            </div>
        );
    }
}