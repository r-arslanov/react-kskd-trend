import React, {Component} from 'react';
import './../styles/DpList.css';

export default class DpList extends Component{
	state = {
		names: [],
		type: ""
	}

	getNames(cbNames){
		let url = "http://my-develop.ddns.net/names.php?";
				url+= "type=" + encodeURI(this.state.type);
		fetch(url,{
			methos: "GET"
		}).then(raw => {
				return raw.json();
			}).then(response=>{
				cbNames(response);
			});
	}
	
	componentDidUpdate(){
		if(this.state.type !== this.props.type){
			this.getNames((response)=>{
				this.setState({ names:response.names, type:this.props.type });
			});
		}
	}

	render(){
		console.log(this.state);
		return(
			<div className="DpListContainer">
				<ul>
					{this.state.names.map(dp => <li key={dp.name} >{dp.name}</li> )}
				</ul>
			</div>
		);
	}
}