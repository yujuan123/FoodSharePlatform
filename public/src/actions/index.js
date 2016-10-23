import request from 'superagent';
export const menuLoaded = (data)=>({
  type:'MENU_LOADED',
  data
});

export const loadMenuDetail = (data)=>{
  return {
    type:'MENUDETAIL_LOADED',
    data
  }
};

export const loadUserMessage = ( userName)=>{
  return {
    type:'USERMESSAGE_LOADED',
    userName
  }
};

//用来 发送用户信息
export const sendUserInfor = (userMessage)=>{
  return {
    type:'USERMESSAGE_SENT',  
    userMessage
  }
};

export const hideLoginErrInfor = (err)=>{
  return {
    type:'LOGINERRMESSAGE_SHOWED',
    err
  }
};

export const requestUserCenterMessage = ()=>{
  return {
    type:'USERCENTERMESSAGE_REQUESTED'
  }
};

export const receiveUserCenterMessage = (userName,isCompleted)=>{
  return {
    type:'USERCENTERMESSAGE_RECEIVED',
    userName,
    isCompleted
  }
};

export const requestMenuLoaded = ()=>{
  return {
    type:'MENULOADED_REQUESTED'
  }
};

export const receiveMenuLoaded = (userName,isCompleted)=>{
  return {
    type:'MENULOADED_RECEIVED',
    userName,
    isCompleted
  }
};

export const getUserCenterMessage = ()=>{
  return (dispatch)=>{
    dispatch(requestUserCenterMessage());

    request.get('/menus/verifyUserIdentity')
        .end((err,res)=>{
          if(res.text){
            dispatch(receiveUserCenterMessage(res.text,true));//res.text 官网
          }
        })
  }
};
//ji morning
export const getMenuLoaded = ()=>{
  return (dispatch)=>{
    dispatch(requestMenuLoaded());

    request.get('/menus/verifyUserUploadIdentity')
        .end((err,res)=>{
          if(res.text){
            dispatch(receiveMenuLoaded(res.text,true));
          }
        })
  }
};

//上传
//action
export const addMaterial=(data)=>{
  return {
    type:'materialUpload',
    data
  }
};
export const deleteMaterial=(id)=>{
  return {
    type:'deleteMaterial',
    id
  }
};
export const uploadImage=(file)=>{
  return {
    type:'uploadImage',//然后将菜谱全部数据通过应用程序端点express存进mongodb建立的表中，最后进行boostrap规范化
    file
  };
};
export const uploadMenu=(data)=>{
  return {
    type:'uploadMenu',
    data
  };
};