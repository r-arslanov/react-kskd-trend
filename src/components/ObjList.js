import React, {Component} from 'react';
import ObjButton from './ObjButton';

import './../styles/ObjList.css';

export default class ObjList extends Component{
	
	state = {
		types:[]
	}

	getTypes(cbTypes){
		let url = "http://my-develop.ddns.net/types.php";
		
		fetch(url,{
			method: "GET"
		}).then(raw =>{
			return raw.json();
		}).then(response=>{
			cbTypes(response);
		});
	}

	componentDidMount(){
		this.getTypes(response=>{
			this.setState({types:response.types});
		});
	}

	render(){
		console.log(this.state);
		return(
			<div className="ObjListContainer">
				{this.state.types.map(
					(type) => {
						return(
							<ObjButton onClick={() => this.props.bindClick(type)} text={type} key={type}/>
						)
					})
					}
			</div>
		);
	}
}