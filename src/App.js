import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Maxx', age: 50 },
      { name: 'Manu', age: 70 },
      { name: 'stephani', age: 30 }
    ],
    otherState: 'some other value'
  }

  //ini adalah function dari tombol switch name
  switchNameHandeler = (newName) => {
    console.log('Was Clicked!'); //cek di console untuk mengetahuinya
    // salah #this.state.persons[0].name = 'Mahmudi'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'stephani', age: 26 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephani', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Ini bekerja dengan baik</p>
        <button onClick={() => this.switchNameHandeler('Maximilaimsnf')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandeler.bind(this, 'Maxxxx')}
          changed={this.nameChangeHandler}> My Hobbies : Racing </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
