import React, { Component, useEffect } from 'react';
// instaliran dodatan paket za generisanje id-jeva, i preko f-je nextId() generisemo novi id
import nextId from "react-id-generator";

const Form = ({ filter, setFilter, setFilteredItems, input, todos, setTodos, setInput }) => {

    useEffect(() => {
        handleFilter();
    }, [filter, todos])

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const handleNewTodo = (e) => {
        e.preventDefault();
        setInput(input);
        input !== ""
            ? setTodos([...todos, { todoInfo: input, done: false, id: nextId(), importance: "standard" }])
            : alert("Ne može se napraviti todo od praznog unosa");
        // sad praznimo polje za unos
        setInput("");
    }

    const handleFilter = (ev) => {
        switch (filter) {
            case "done":
                setFilteredItems(todos.filter(el => el.done));
                break;
            case "undone":
                setFilteredItems(todos.filter(el => !el.done));
                break;
            default:
                setFilteredItems(todos);
                break;
        }
    }

    const handleChangeFilter = (ev) => {
        setFilter(ev.target.value);
    }
    const enterPressed = (ev) => {
        let code = ev.keyCode || ev.which;
        if (code === 13) handleNewTodo();
    }

    return (
        <form>
            <div className="form-container">
                <div className="form-container1">
                    {/* dodavanjem value={input} mi obezbedjujemo da kad god se stanje inputa promeni
            nakon ponovnog renderovanja value bude jednako inputu koji smo setovali na "" */}
                    <input value={input} onChange={inputHandler} type="text" className="todo-input" placeholder="Unesite Vaš zadatak:" />
                    <button onKeyPress={enterPressed} onClick={handleNewTodo} className="todo-button" type="submit">
                        {/* ovo menjamo kasnije */}
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
                <div className="form-container2">
                    <div className="select">
                        <select onChange={handleChangeFilter} name="todos" className="filter-todo">
                            <option value="all">Svi</option>
                            <option value="done">Završeni</option>
                            <option value="undone">Nezavršeni</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;