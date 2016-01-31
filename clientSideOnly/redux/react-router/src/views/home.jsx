import React, { Component } from 'react';
import Counter from '../components/counter';

export default class HomeView extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="view view--home">
        <h1>This is the home view</h1>
        <Counter/>
      </div>
    );
  }
}