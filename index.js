import React from 'react';
import ReactDOM from 'react-dom';


class HeroSelector extends React.Component {
	render() {
		return (
		<div>
			<button>
				{"Select a random Hero"}
			</button> 
			<text> {this.props.selectedHero} </text>
		</div>

			);
	}
}
class Overwatch extends React.Component {
  render() {
    return (
      <div>
        <h1>Random Overwatch Hero Selector</h1>  
        <HeroSelector selectedHero = {null} />	
      </div>
    );
  }
}


function randomHero(){

		return "abc";
	}




ReactDOM.render(
  <Overwatch />,
  document.getElementById('root')
);
