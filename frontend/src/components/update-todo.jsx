import { useState } from "react";
import axios from "axios";
import { Card, Typography, TextField, Button } from "@mui/material";

export function UpdateTodo({ _id, handleClose, handleEdit, handleUpdate, setLoading }) {
    const [data, setData] = useState({ title: "", description: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        console.log({ _id }, { data });

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

    return (
        // <Card sx={{width: "300px", p:1, position: "absolute", top: "40%", left: "40%"}}>
        <>
        <form
            className="form-container"
            onSubmit={(e) => {
                console.log(_id)
                handleSubmit(e);
                handleEdit(_id);
                handleClose();
                handleUpdate();
            }}
        >
            <TextField
                type="text"
                name="title"
                label="Title"
                className="input"
                onChange={handleChange}
                sx={{margin: "0.5em 2em"}}
                required
                /><br/>
            <TextField
                type="text"
                name="description"
                label="description"
                className="input"
                onChange={handleChange}
                sx={{margin: "0.5em 2em"}}
            /><br/>
            <Button type="submit" className="button" sx={{m:1}}>
                Submit
            </Button>
        </form></>
        // </Card>
    );
}