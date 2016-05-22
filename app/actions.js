/* Action Types */
export const LOAD_MESSAGES = 'loadMessages'
export const CREATE_USER = 'createUser'
export const CREATE_USER_SUCCESS = 'createUserSuccess'
export const CREATE_USER_FAILED = 'createUserFailed'
export const LOGIN_USER = 'loginUser'
export const LOGIN_USER_SUCCESS = 'loginUserSuccess'
export const LOGIN_USER_FAILED = 'loginUserFailed'

/* Action Creators */
export function loadMessages(message) {
  return {
    type: LOAD_MESSAGES,
    message
  }
}

export function createUser() {
  return {
    type: CREATE_USER
  }
}

export function createUserSuccess(response) {
  return {
    type: CREATE_USER_SUCCESS,
    response: response
  }
}

export function createUserFailed(response) {
  return {
    type: CREATE_USER_FAILED,
    response: response
  }
}

export function loginUser() {
  return {
    type: LOGIN_USER
  }
}

export function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    token: token
  }
}

export function loginUserFailed(response) {
  return {
    type: LOGIN_USER_FAILED,
    response: response
  }
}
