import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Chris", age: 31},
            {name: "Kevin", age: 45},
            {name: "Max", age: 28},
        ]
    });

    const switchNameHandler = () => {
        //console.log('was clicked');
        setPersonsState({
            persons: [
                {name: "Christopher", age: 31},
                {name: "Kevin Karel", age: 45},
                {name: "Maximillian", age: 28},
            ]
        });
    };


    return (
        <div className="App">
            <h1>Hey, I'm a React App</h1>
            <p>This really works!</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Sailing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    //return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Hi,I\'m a React App'));
}


export default app;

