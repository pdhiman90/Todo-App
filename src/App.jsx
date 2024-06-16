import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';
import './App.css';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {

  const [todoItems, setTodoItems] = useState([])
  const hadleNewItem = (itemName, itemDueDate) => {
    // console.log(`new item Added : ${itemName} Date: ${itemDueDate}`);
    
    // setTodoItems((currentValue)=>{
    //   const newTodoItems = [...currentValue,
    //     {name: itemName,dueDate: itemDueDate},
    //     ];
    //     return newTodoItems;
    // });

    setTodoItems((currValue)=>[
      ...currValue,
      {name: itemName,dueDate: itemDueDate},
    ])
    };

    const handleDeleteItem = (todoItemName)=>{
      const newTodoItems = todoItems.filter(item => item.name !==todoItemName);
      setTodoItems(newTodoItems);
      // console.log(`Item Deleted : ${todoItemName}`);

    }
  return <center className="todo-container">
    <AppName />
    <AddTodo onNewItem={hadleNewItem} />
   {todoItems.length===0 && <WelcomeMessage/>} 
    <TodoItems todoItems = { todoItems} onDeleteClick = {handleDeleteItem}/>
  </center>
}

export default App;
