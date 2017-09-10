// State argument is not application state,
// only the state this reducer is responsible for

// "state = null" if state is undefined, return null = ES6
// reducers are in charge of changing application state over time,
// through the use of action
export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload
  }
  return state
}
