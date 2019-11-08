import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

 render() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <p>Ini bekerja dengan baik</p>
        <button>Switch Name</button>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My Hobbies : Racing </Person>
        <Person name="Indra" age="20" />
    </div>
  );
}
}

export default App;
