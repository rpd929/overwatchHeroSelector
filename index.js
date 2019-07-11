import React from 'react';
import ReactDOM from 'react-dom';


class HeroSelector extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isSelected: null,
		}
	}

	handleClick() {

		this.setState({
			isSelected: randomHero(),
		})

			
			
		


	}

	render() {
		return (
		<div>
			<button onClick ={() => this.handleClick()}>
				{"Select a random Hero"}
			</button> 
			<text> {this.state.isSelected} </text>
		</div>

			);
	}
}
class Overwatch extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Overwatch Hero Selector</h1>  
        <HeroSelector name ={"selectedHero"} />	
      </div>
    );
  }
}


function randomHero(){
		const heros = ["Ana", "Ash", "Batiste", "Bastion", "Brigitte", "Diva", "DoomFist", "Genji", "Hanzo", "Junkrat",
			"Lucio", "Mccree", "Mei", "Mercy", "Moira", "Orisa", "Pharah", "Reaper", "Reinhardt", "Roadhog", "Soldier: 76", 
			"Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker", "Winston", "Wreckingball", "Zarya", "Zenyatta"];
		const selectedIndex = Math.floor((Math.random() * Math.floor(30)));

		const selectedHero = heros[selectedIndex];

		return selectedHero;


	}




ReactDOM.render(
  <Overwatch />,
  document.getElementById('root')
);

