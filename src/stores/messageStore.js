import dispatcher from '../core/Dispatcher.js';
import ActionConst from '../constants/ActionTypes.js';
import messageActions from '../actions/messageActions.js';
import messageService from '../core/message/messageService.js'
import events from 'events';

let eventEmitter = new events.EventEmitter();

const init=()=>{
  dispatcher.register((payload) => {
    let action = payload.action;
    switch(action.actionType) {

        case ActionConst.SEND_MESSAGE:
        eventEmitter.emit('AddMessage',action.data);
        messageService.postMessage(action.data);
        break;

        case ActionConst.RECIVE_MESSAGE_LIST:
        eventEmitter.emit('ReciveMessageList',action.data);
        break;

        case ActionConst.REQUEST_MESSAGE_LIST:
        messageService.getMessageList();
        break;
    }
  });
}

const addMessageListener=(fn)=>{
  eventEmitter.on('AddMessage',fn);
}

const removeAddMessageListener=(fn)=>{
  eventEmitter.removeListener('AddMessage',fn);
}

const reciveMessageListListener=(fn)=>{
  eventEmitter.on('ReciveMessageList',fn);
}

const removeReciveMessageListListener=(fn)=>{
  eventEmitter.removeListener('ReciveMessageList',fn);
}

export default {
  init,
  addMessageListener,
  removeAddMessageListener,
  reciveMessageListListener,
  removeReciveMessageListListener
}
