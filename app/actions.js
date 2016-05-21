/* Action Types */
export const LOAD_MESSAGES = 'loadMessages'
export const CREATE_USER = 'createUser'
export const CREATE_USER_SUCCESS = 'createUserSuccess'
export const CREATE_USER_FAILED = 'createUserFailed'

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
