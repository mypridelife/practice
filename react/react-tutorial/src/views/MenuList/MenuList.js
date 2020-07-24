import React from "react"
import { Link } from "react-router-dom"

const MenuList = () => {
  return (
    <div>
      <h2>Menu</h2>

      <ul>
        <li className="ml-24">
          <Link to="/example/index">Example Index</Link>
        </li>
        <li>
          <Link to="/todo/list">Todo List</Link>
        </li>
        <li>
          <Link to="/url/params">Url Params</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuList
