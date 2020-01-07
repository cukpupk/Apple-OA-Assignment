import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/Netfix';

class App extends Component {
  render() {
    return (
      <div className="App">
        <label className="Label">MyList
          <MovieList list="My List" btnName="Remove" listType="mylist"/>
        </label>
        
        <label className="Label">recommendations
          <MovieList list="Recommendation List"
          btnName="Add" listType="recommendations"/>
        </label>
        <Footer/>
      </div>
    );
  }
}

export default App;