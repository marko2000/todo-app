import React, { Component, useState, useEffect } from 'react';
import Form from "./Components/Form.jsx";
import List from "./Components/List.jsx";
import useLocalStorage from "./hooks/UseLocalStorage.jsx"
import "./App.css";


const App = () => {

    // Stanja sa useState
    const [input, setInput] = useState("");
    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useLocalStorage("todos", []);
    const [filter, setFilter] = useState(["all"]);
    const [filteredItems, setFilteredItems] = useState([todos]);

    return (<div>
        <h4 > Todo Aplikacija </h4>
        <Form filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
            filter={filter}
            setFilter={setFilter}
            input={input}
            setTodos={setTodos}
            todos={todos}
            setInput={setInput}
        />
        <List filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
            todos={todos}
            setTodos={setTodos}
        />
    </div>
    );
}

export default App;