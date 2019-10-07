
import React, { Component } from 'react';
import { Examples } from './components/examples';
import {stFlex, stFlexCol } from './styles/application-styles.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <main>
          <div className={[stFlex, stFlexCol].join(' ')}>
            <Examples></Examples>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
