import TodoCard from "./todo-card";
import { UpdateTodo } from "./update-todo";
import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { DialogTitle, Fab, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import {CircularProgress, Dialog} from "@mui/material";

function TodoList(){
    const [update, setUpdate] = useState(false)
    const [todo, setTodo] = useState([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/todo")
        .then((res) => {
            console.log(res.data);
            setTodo(res.data);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [update])
    function handleEdit(id) { // added
        setId(id); 
        setOpen(true);
    }

    function handleUpdate() { // added
        console.log("update:", update, !update);
        setTimeout(()=>{setUpdate(!update)}, 1000)
    }

    function handleDelete(id) { // added
        setTimeout(() => {
            axios.delete(`http://localhost:8000/api/todo/${id}`);

            setTodo((data) => {
                return data.filter((todo) => todo._id !== id);
            });
        }, 90);
        document.getElementsByClassName(`todo-card-${id}`)[0].classList.add("delete")
    }

    function handleClose() { // added
        setId("");
        setOpen(false);
    }
    return(
        !loading ?
        <section className="container">
            
            <section className="contents">
                    {todo.map((data) => (
                        <TodoCard
                            key={data._id}
                            data={data}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
            <Link to="/create-todo" className="todo-card" style={{textDecoration: "none", margin: "4em"}}>
                <Fab aria-label="add">
                    <Icon>add</Icon>
                </Fab>
            </Link>
            </section>
            {open ? (
                <section className="update-container"> 
                    <Dialog className="update-contents" onClose={handleClose} open={open} sx={{width: "auto"}}>
                        <DialogTitle>Update todo</DialogTitle>

                        <UpdateTodo
                            _id={id}
                            handleClose={handleClose}
                            handleUpdate={handleUpdate}
                            handleEdit={handleEdit}
                            setLoading={setLoading}
                        />
                    </Dialog>
                </section>
            ) : (
                ""
            )}
        </section> : <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "10em"}}><CircularProgress/></div>
        )
}

export default TodoList