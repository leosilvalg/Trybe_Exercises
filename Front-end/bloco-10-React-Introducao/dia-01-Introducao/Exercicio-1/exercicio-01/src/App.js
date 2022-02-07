import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tasks = ['estudar', 'comer', 'dormir', 'trabalhar'];

function App() {
  return (
    <section>
      <ol>{tasks.map((index) => Task(index))}</ol>
    </section>
  );

}


export default App;
