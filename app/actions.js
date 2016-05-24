/* Action Types */
export const CREATE_USER = 'createUser'
export const CREATE_USER_SUCCESS = 'createUserSuccess'
export const CREATE_USER_FAILED = 'createUserFailed'
export const LOGIN_USER = 'loginUser'
export const LOGIN_USER_SUCCESS = 'loginUserSuccess'
export const LOGIN_USER_FAILED = 'loginUserFailed'
export const NEW_MESSAGE = 'newMessage'

/* Action Creators */
export function createUser() {
  return {
    type: CREATE_USER
  }
}

export function createUserSuccess(data) {
  return {
    type: CREATE_USER_SUCCESS,
    data: data
  }
}

export function createUserFailed(data) {
  return {
    type: CREATE_USER_FAILED,
    data: data
  }
}

export function loginUser() {
  return {
    type: LOGIN_USER
  }
}

export function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data: data
  }
}

export function loginUserFailed(data) {
  return {
    type: LOGIN_USER_FAILED,
    data: data
  }
}

export function newMessage(data) {
  return {
    type: NEW_MESSAGE,
    data: data
  }
}
