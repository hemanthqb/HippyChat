import fetch from '../../core/fetch';
import messageActions from '../../actions/messageActions.js'

const constructParams=(paramObj)=>{
    let param=[];
    for(let i in paramObj)
    {
        if(Array.isArray(paramObj[i]))
        {
            param.push(i+'='+paramObj[i].join(','));
        }
        else {
            param.push(i+'='+paramObj[i]);
        }
    }
    return param.join('&');
};

const composeSearchUrl=(paramObj)=>{
    return 'api/postmessage?'+constructParams(paramObj)
};

const postMessage= (params)=> {
    fetch(composeSearchUrl(params)).then(function(resp){
       return resp.json();
    }).then(function(res){
      return res;
    });
};

const getMessageList=()=>{
  fetch('api/getmessagelist').then(function(resp){
     return resp.json();
  }).then(function(res){
    messageActions.reviceMessageList(res);
    return res;
  });
}

export default {
  postMessage,
  getMessageList
}
