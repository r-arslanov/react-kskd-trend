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
				response.names.forEach((name, index) => {
					response.names[index].enabled = false;
				});
				cbNames(response);
			});
	}
	
	updChecked(index){
		// let loc_ind = parseInt(index);
		let tmp = this.state.names;
		// console.log(tmp[loc_ind]);
		tmp[index].enabled = !this.state.names[index].enabled;
		this.setState({names:tmp});
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
					{this.state.names.map((dp, index) => <li key={index}> <input type="checkbox" checked={this.state.names[index].enabled} onChange={() => this.updChecked(index)}/> {dp.name} </li> )}
				</ul>
			</div>
		);
	}
}