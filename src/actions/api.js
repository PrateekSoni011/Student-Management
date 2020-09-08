import { CommonApiCalling } from '../config/utils'

export const LOGIN_DATA = "LOGIN_DATA";
export function loginAPI (data) {
    // console.log(data);
    delete data.error;
    delete data.logedIn;
    let options = {
            method: 'post',
            url: 'http://localhost:3006/studentLogin',
            data            
        }
    return dispatch => {
       return CommonApiCalling('post', 'http://localhost:3006/studentLogin', options)
        .then((response) => {
            const result = response.data;
            dispatch({type: LOGIN_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: LOGIN_DATA, data: error});
            throw(error);
        });
    }
}

export const SIGN_UP_DATA = "SIGN_UP_DATA";
export function signUpAPI (data) {
    // console.log(data);
    delete data.error;
    // delete data.signIn;
    let options = {
            method: 'post',
            url: 'http://localhost:3006/studentSignIn',
            data            
        }
    return dispatch => {
       return CommonApiCalling('post', 'http://localhost:3006/studentSignIn', options)
        .then((response) => {
            const result = response.data;
            dispatch({type: SIGN_UP_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: SIGN_UP_DATA, data: error});
            throw(error);
        });
    }
}

export const STUDENT_REGISTER = "STUDENT_REGISTER";
export function studentRegisterAPI (data) {        
    let options = {
            method: 'post',
            url: 'http://localhost:3006/studentRegister',
            data            
        }
    return dispatch => {
       return CommonApiCalling('post', 'http://localhost:3006/studentRegister', options)
        .then((response) => {
            const result = response.data;
            dispatch({type: STUDENT_REGISTER, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: STUDENT_REGISTER, data: error});
            throw(error);
        });
    }
}

export const STUDENT_DATA = "STUDENT_DATA";
export function getStudents () {
    // console.log(data);
    
    // delete data.signIn;
    let options = {
            method: 'get',
            url: 'http://localhost:3006/getStudents'                        
        }
    return dispatch => {
       return CommonApiCalling('get', 'http://localhost:3006/getStudents', options)
        .then((response) => {
            const result = response.data;            
            dispatch({type: STUDENT_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: STUDENT_DATA, data: error});
            throw(error);
        });
    }
}

