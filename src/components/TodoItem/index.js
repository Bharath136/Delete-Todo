import './index.css'

const TodoItem = props => {
  const {filteredTodo, onDelete} = props
  const {id, title} = filteredTodo

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
