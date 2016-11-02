import React from 'react'; // eslint-disable-line no-unused-vars
import {render} from 'react-dom';
import resultList from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import {Router, Route,IndexRoute, browserHistory} from 'react-router';
import AppRoot from './components/AppRoot';
import MenuPackage from './components/Menus';
import MenuDetailAppPackage from './components/MenuDetailApp';
import HomePage from './components/HomePage';
import LoginFormPackage from './components/LoginForm';
//上传
import MenuUploadAppPackage from './components/MenuUploadApp';
//尚未成形的 userCenterApp
import UserCenterAppPackage from './components/UserCenterApp';


//注册
import RegisterFormPackage from './components/RegisterForm';


//加载中间件
import menuLoadedMiddleware from './middlewares/menuLoadedMiddleware';
import menuDetailLoadedMiddleware from './middlewares/menuDetailLoadedMiddleware';
import recentMenuLoadedMiddleware from './middlewares/recentMenuLoadedMiddleware';
import userMessageLoadedMiddleware from './middlewares/userMessageLoadedMiddleware';
//上传
import menuUploadMiddleware from './middlewares/menuUploadMiddleware';
//删除作品
import deleteWorkMiddleware from './middlewares/deleteWorkMiddleware';
//与登录有关
import sendUserMessageMiddleware from './middlewares/sendUserMessageMiddleware';
import userWorksLoadedMiddleware from './middlewares/userWorksLoadedMiddleware';
import sendUsernameMiddleware from './middlewares/sendUsernameMiddleware';
const store = createStore(
    resultList,
    applyMiddleware(thunkMiddleware,createLogger(),menuLoadedMiddleware,menuDetailLoadedMiddleware,recentMenuLoadedMiddleware,sendUserMessageMiddleware,userMessageLoadedMiddleware,menuUploadMiddleware,userWorksLoadedMiddleware,sendUsernameMiddleware,deleteWorkMiddleware)
);

store.dispatch({
  type: 'INIT'
});

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppRoot}>
          <IndexRoute component={HomePage}/>
          <Route path="/menu" component={MenuPackage}/>
          <Route path="/menuDetail/:id" component={MenuDetailAppPackage}/>
          <Route path="/login" component={LoginFormPackage}/>
          <Route path="/register" component={RegisterFormPackage}/>
          <Route path="/userCenter" component={UserCenterAppPackage}/>
          <Route path="/userUploaded" component={MenuUploadAppPackage}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
);