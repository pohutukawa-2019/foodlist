export const ERROR = 'ERROR'

export function error (message) {
  return {
    type: ERROR,
    message
  }
}
