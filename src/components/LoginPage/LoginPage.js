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
import s from './LoginPage.scss';
import RaisedButton from 'material-ui/lib/raised-button';



class LoginPage extends Component {

  static propTypes = {
       OnEnter:PropTypes.func.isRequired
  };

  constructor(props){
     super(props);
     this.Enter=this.Enter.bind(this);
     this.Change=this.Change.bind(this);
     this.name='';
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
          <h1>Hippy Chat</h1>
            <input type="text" placeholder="Type your name" value={this.name} onChange={this.Change}/>
            <RaisedButton label="Enter" primary={true} onClick={this.Enter}/>
          </div>
      </div>
    );
  }

}

export default withStyles(LoginPage, s);
