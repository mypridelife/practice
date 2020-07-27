import React, { Component } from "react"
import "./TodoList.scss"

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      text: "",
    }
  }
  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.text.length === 0) {
      return
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
    }
    this.setState({
      items: [...this.state.items, newItem],
      text: "",
    })
  }
  render() {
    return (
      <div className="p-todo-list">
        <TodoItem propsItems={this.state.items} />

        <form onSubmit={this.handleSubmit} className="m-form">
          <div className="form-body">
            <label htmlFor="new-input-todo">what needs to be done?</label>
            <input
              id="new-input-todo"
              name="input-todo"
              value={this.state.text}
              onChange={this.handleInputChange}
              placeholder="todo"
              autoFocus
            />
          </div>
          <div className="form-bottom">
            <button type="submit" className="u-button">
              add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function TodoItem(props) {
  return (
    <div className="c-todo-item">
      <h2>TODO List</h2>
      {props.propsItems.length > 0
        ? props.propsItems.map((item, index) => (
            <div className="li-item" key={item.id}>
              {index + 1}. {item.text}
            </div>
          ))
        : "None"}
    </div>
  )
}

export default TodoList
