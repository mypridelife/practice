import React from "react"
import "./App.css"
import MenuList from "../MenuList/MenuList"
import TodoList from "../TodoList/TodoList"
import ExampleIndex from "../example/ExampleIndex"
import UrlParams from "../UrlParams/UrlParams"

import { HashRouter as Router, Switch, Route } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" children={<MenuList />} />
          <Route path="/example/index" children={<ExampleIndex />} />
          <Route path="/todo/list" children={<TodoList />} />
          <Route path="/url/params" children={<UrlParams />} />
        </Switch>
      </Router>
    )
  }
}

export default App
