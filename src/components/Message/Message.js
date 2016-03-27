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
import s from './Message.scss';
import RaisedButton from 'material-ui/lib/raised-button';

class Message extends Component {

  static propTypes = {
    name:PropTypes.string.isRequired,
    message:PropTypes.string.isRequired
  };

  constructor(props){
     super(props);

  }

  name=''

  componentWillMount() {

  }

  Enter(e){
     this.props.OnEnter(this.name);
  }

  Change(e){
       this.name =  e.target.value;
       this.setState({});
  }

  render() {
    return (
      <div className={s.root} >
          <div className={s.container}>
              <div className={s.header}>
                  <span>{this.props.name}</span>
              </div>
              <div className={s.message}>
                  <span>{this.props.message}</span>
              </div>
          </div>
      </div>
    );
  }

}

export default withStyles(Message, s);
