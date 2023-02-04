import { useState, useReducer } from 'react'

const reduceTodos = (currState, action) => {
  console.log(currState, action)

  switch (action.type) {
    case 'add_todo':
      return [...currState, action.data]
    case 'remove_todo':
      return currState.filter(todo => todo.id !== action.data) 
    default:
      return currState
  }
}

export default function UseReducerPlayground() {
  const [todos, updateTodos] = useReducer(reduceTodos, [])
  /**
   * [
   *    {id: '', chore: ''},
   * ]
   */
  const [inputValue, setInputValue] = useState('')

  return (
    <div style={{ padding: 10 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateTodos({
            type: 'add_todo',
            data: { id: new Date().getMilliseconds(), chore: inputValue },
          })
          setInputValue('')
        }}
      >
        <label>
          Chore:
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <br />
      {todos.map((todo) => {
        return (
          <div key={todo.id} style={{ display: 'flex', marginTop: 10 }}>
            <div style={{ minWidth: 200 }}>{todo.chore}</div>
            <button
              onClick={() => {
                updateTodos({ type: 'remove_todo', data: todo.id })
              }}
            >
              Remove Chore
            </button>
          </div>
        )
      })}
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  )
}
