import React from 'react';
import {Navbar} from "./components/Navbar";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./containers/VisibleFooter";
import Alert from "./containers/VisibleAlert";


function App() {

    return (
        <>
            <Navbar/>
            <div className="container pt-4">
                <Alert />
                <AddTodo />
                <hr/>
                <VisibleTodoList />
                <Footer />
            </div>
        </>
    );
}

export default App;
