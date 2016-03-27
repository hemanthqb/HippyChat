import dispatcher from '../core/Dispatcher.js';
import ActionConst from '../constants/ActionTypes.js'

const sendMessage = (params)=>{
  dispatcher.handleAction({
    actionType: ActionConst.SEND_MESSAGE,
    data: params,
  });
}

const reviceMessageList = (params)=>{
  dispatcher.handleAction({
    actionType: ActionConst.RECIVE_MESSAGE_LIST,
    data: params,
  });
}

const requestMessageList=()=>{
  dispatcher.handleAction({
    actionType: ActionConst.REQUEST_MESSAGE_LIST,
    data: {},
  });
}


export default {
  sendMessage,
  reviceMessageList,
  requestMessageList
}
