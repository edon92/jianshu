import React, { Component } from 'react';
import Header from './common/header'
import {GlobalStyle} from './style'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'

import './static/iconfont/iconfont.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <div>
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
