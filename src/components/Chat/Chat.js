/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Chat.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import ChatList from '../ChatList'
import ChatInput from '../ChatInput'

class Chat extends Component {

  static propTypes = {
      name:PropTypes.string.isRequired
  };

  constructor(props){
     super(props);
  }

  name=''

  componentWillMount() {

  }

  render() {
    return (
      <div className={s.root} >
        <ChatList name={this.props.name}/>
        <ChatInput name={this.props.name}/>
      </div>
    );
  }

}

export default withStyles(Chat, s);
