export default function (error = null, action) {
  switch (action.type) {
    case 'ERROR':
      return action.message

    default:
      return error
  }
}
