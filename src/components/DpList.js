import React, {Component} from 'react';
import './../styles/DpList.css';

export default class DpList extends Component{
    state = {
        names: []
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
        console.log('component dud mount');
        this.getNames((response)=>{
            // console.log(response);
            this.setState({names:response.names});
        });
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    render(){
        console.log(this.state);
        return(
            <div className="DpListContainer">
                <ul>
                    {this.state.names.map(dp => <li>{dp.name}</li> )}
                </ul>
            </div>
        );
    }
}