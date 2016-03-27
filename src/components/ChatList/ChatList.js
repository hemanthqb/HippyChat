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
import s from './ChatList.scss';
import RaisedButton from 'material-ui/lib/raised-button';
import Message from '../Message';
import store from '../../stores/messageStore'
import messageAction from '../../actions/messageActions.js'

class ChatList extends Component {

  static propTypes = {
       name:PropTypes.string.isRequired
  };

  constructor(props){
     super(props);
     this.name='';
     this.list=[

     ];
     this.addMessage=this.addMessage.bind(this);
     this.addMessageList=this.addMessageList.bind(this);
  }

  name=''
  scheduleListFetch()
  {
     window.setInterval(function()
     {
         messageAction.requestMessageList();
     },1000);
  }
  componentWillMount() {
      store.addMessageListener(this.addMessage);
      store.reciveMessageListListener(this.addMessageList);
      messageAction.requestMessageList();
      this.scheduleListFetch();
  }



  componentWillUnMount() {
      store.removeAddMessageListener(this.addMessage);
      store.removeReciveMessageListListener(this.addMessageList);
  }


  addMessage(paramObj)
  {
     this.list.push({name:this.props.name,message:paramObj.message});
     this.setState({});
  }

  addMessageList(list)
  {
    this.list=list;
    this.setState({});
  }

  render() {
    let children=[];
    for(var i in this.list)
    {
        children.push(<Message Key={i} name={this.list[i].name} message={this.list[i].message}/>);
    }
    window.setTimeout(function(){
      window.scrollTo(0,document.body.scrollHeight);
    },20);
    return (
      <div className={s.root} >
          {children}
          <div className={s.placeholder}/>
      </div>
    );
  }

}

export default withStyles(ChatList, s);
