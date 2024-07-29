import React, { useReducer } from 'react';

const reducerFn = (state: Record<string, number|boolean>, action: Record<string, string>) => {
  switch(action.type) {
    case "INCREMENT":
      return {count: (state.count as number) + 1, toggle: state.toggle}
    case "TOGGLE":
      return {count: state.count, toggle: !state.toggle}
    default:
      return {count: state.count, toggle: state.toggle}
  }

}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 0, toggle: true});



  return (
    <>
      <button onClick={() => {
        dispatch({type: "INCREMENT"})
        dispatch({type: "TOGGLE"})
      }}>Toggle and Increment.</button>

      <h3>Incremented the counter to {state.count}</h3>
      <h3>Toggle state is {JSON.stringify(state.toggle)}</h3>
    </>
  )
}

export default App
