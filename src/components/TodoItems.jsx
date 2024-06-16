import TodoItem from "./TodoItem";
import Style from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {

    return (<div className={Style.items}>
        {todoItems.map(item => 
        <TodoItem 
        key={item.name}
        todoName={item.name}
         todoDate={item.dueDate} 
         onDeleteClick = {onDeleteClick} />)}
    </div>
    );
}

export default TodoItems;