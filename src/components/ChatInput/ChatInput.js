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
import s from './ChatInput.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import messageAction from '../../actions/messageActions.js'

class ChatInput extends Component {

  static propTypes = {
       name:PropTypes.string.isRequired
  };

  constructor(props){
     super(props);
     this.Change=this.Change.bind(this);
     this.Send=this.Send.bind(this);
     this.message='';
     this.name=this.props.name;
  }

  name=''

  componentWillMount() {

  }

  Change(e){
       this.message =  e.target.value;
       this.setState({});
  }

  Send(){
      messageAction.sendMessage({message:this.message,
      name:this.name});
       this.message="";
       this.setState({});
  }

  render() {
    return (
      <div className={s.root} >
         <div className={s.container}>
            <input type="text" value={this.message} onChange={this.Change}/>
            <RaisedButton label="Send" primary={true} onClick={this.Send}/>
         </div>
      </div>
    );
  }

}

export default withStyles(ChatInput, s);
