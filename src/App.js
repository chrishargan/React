import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Chris', age: 31},
            {name: 'Kevin', age: 45}
        ],
        otherState: 'some other value'
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: 'Christopher', age: 31},
                {name: 'Kevin', age: 45}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Christopher', age: 31},
                {name: event.target.value, age: 45}
            ]
        });
    }

    render() {
        const styling = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };
        {/* This is an example of how to use inline styling for react to scope the changes only locally   */}
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={styling}
                    onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
                {/*  this way of state change is when you place the new entry in as parameter into the method when you use an arrow function where you have pointed to the variable that will change i.e newName   */}
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Maximus')}
                >
                    {/* another BETTER way is to use the bind to attach the new output    */}
                    My Hobbies: Racing
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangeHandler}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
