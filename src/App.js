import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hey, I'm a React App</h1>
                <p>This really works!</p>
                <Person name="Chris" age="31"/>
                <Person name="Kevin" age="45">My Hobbies: Sailing</Person>
                <Person name="Max" age="28"/>
            </div>
        );
        //return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Hi,I\'m a React App'));
    }
}

export default App;
