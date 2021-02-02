import React from 'react';
import Item from './Item.jsx'

const List = ({filteredItems, todos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredItems.map((todo) => <Item 
                todo={todo} 
                key={todo.id} 
                info={todo.todoInfo} 
                todos={todos} 
                setTodos={setTodos}/>)}
            </ul>
        </div>
    );
}

export default List;