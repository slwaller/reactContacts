import React from 'react';
import ReactDOM from 'react-dom'

import ContactsList from './ContactsList'


let contacts = [{
	id: 1,
	name: 'Walt',
	phone: '803 521 1004'
},	{
	id: 2,
	name: 'Bucc',
	phone: '555 555 5555'
}, {
	id: 3,
	name: 'Jenny',
	phone: '555 867 5309'	
}, {
	id: 4,
	name: 'Jake',
	phone: '232 555 2212'
}]

class App extends React.Component {
	render(){
		return (
			<div>
				<h1>Contact List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('app'));