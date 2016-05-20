/* Action Types */
export const LOAD_MESSAGES = 'loadMessages'

/* Action Creators */
export function loadMessages(message) {
  return {
    type: LOAD_MESSAGES,
    message
  }
}
