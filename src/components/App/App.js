/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';

import LoginPage from '../LoginPage';
import Chat from '../Chat';
import store from '../../stores/messageStore'


class App extends Component {

  constructor(props){
     super(props);
     this.OnEnter=this.OnEnter.bind(this);
     this.name='';
     store.init();
  }

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);

  }

  componentWillUnmount() {
    this.removeCss();
  }
OnEnter(value){
  if(value!='')
  {
      this.name=value;
      console.log("Entered:"+value);
      this.setState({});
  }
}
  render() {
    return !this.props.error ? (
      <div>
      {this.name==''? <LoginPage OnEnter={this.OnEnter}/>:<Chat name={this.name}/>}
      </div>
    ) : this.props.children;
  }

}

export default App;
