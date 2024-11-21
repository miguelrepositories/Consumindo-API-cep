import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		cep: {}
	}

	handleTextChange(e) {
		fetch(`http://viacep.com.br/ws/${e.target.value}/json/`)
		.then(res => res.json())
		.then(res => {
			this.setState({
				cep: res
			})
		})
	}
	render() {
		return (
			<div>
				<strong>Olá, {this.props.name}</strong>
				<div>
					Digite o cep: <input type="text" onChange={this.handleTextChange.bind(this)}></input>
					{Object.entries(this.state.cep).map((values, key) => (
						<h2 key={key}><strong>{values[0]}:</strong>{values[1]}</h2>
					))}
				</div>
			</div>
		)
	}
}

export default App;