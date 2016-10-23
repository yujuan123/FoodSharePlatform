import { combineReducers } from 'redux';

import menus from './menus';
import  menudetails from './menudetails';
import recentMenuList from './recentMenuList';
import loginErrShowed from './loginErrShowed';
import userNameSent from './userNameSent';
import userMessageShowed from './userMessageShowed';

//上传
import materialUploaded from './materialUploaded';
import ImageUploaded from './ImageUploaded'
import userCenterMessageShowed from './userCenterMessageShowed';
import userWorksShowed from './userWorksShowed';
import menuLoadedShowed from './menuLoadedShowed';
import userCenterRedirect from './userCenterRedirect';
const resultList = combineReducers({
    menus,
    menudetails,
    recentMenuList,
    loginErrShowed,
    userNameSent,
    userMessageShowed,
    ImageUploaded,
    materialUploaded,
    userCenterMessageShowed,
    userWorksShowed,
    menuLoadedShowed,
    userCenterRedirect
});

export default resultList;
