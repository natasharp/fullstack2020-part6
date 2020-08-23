const initialState = {
  content: '',
  timeoutId: undefined,
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.data
    case 'REMOVE_NOTIFICATION':
      if (action.data.timeoutId === state.timeoutId) {
        return initialState
      }
      return state
    default: {
      return state
    }
  }
}

export const setNotification = (content, seconds) => {
  return (dispatch) => {
    const timeoutId = setTimeout(
      () => dispatch(removeNotification(timeoutId)),
      seconds * 1000
    )
    dispatch({
      type: 'ADD_NOTIFICATION',
      data: { content, timeoutId },
    })
  }
}

export const removeNotification = (timeoutId) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: { timeoutId },
  }
}

export default notificationReducer
