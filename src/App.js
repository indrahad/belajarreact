import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
   persons: [
   { name: 'Maxx', age: 50},
   { name: 'Manu', age: 70},
   { name: 'stephani', age: 30}  
   ]
  }

 render() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <p>Ini bekerja dengan baik</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies : Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
}
}

export default App;
