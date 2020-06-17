const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 10
      case 'DECREMENT':
        return state - 5

    }
  }
export default numberReducer;