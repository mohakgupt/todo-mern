import { Card, CardContent, CardActions, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Fab} from "@mui/material";
import Icon from "@mui/material/Icon";
import axios from "axios";
export function CreateTodo(){
    const [data, setData] = useState({ title: "", description: "" });

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const todo = {
            title: data.title,
            description: data.description,
        };

        console.log({ todo });
        axios
            .post("http://localhost:8000/api/todo", data)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return(
        <Card sx={{maxWidth: "400px", margin: "auto"}}>
                <Link to="/" className="button-back" style={{margin: "1em"}}>
                    <Fab>
                        <Icon>
                            arrow_back
                        </Icon>
                    </Fab>
                </Link>
            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="form-container"
                    noValidate
                >
                    <TextField
                        name="title"
                        label="Title"
                        value={data.title}
                        onChange={handleChange}
                        className="input"
                        sx={{ margin: "1em"}}
                        /><br/>
                    <TextField
                        type="text"
                        name="description"
                        label="Description"
                        value={data.description}
                        onChange={handleChange}
                        className="input"
                        sx={{ margin: "1em"}}
                    /><br/>
                    <Button type="submit" className="button" sx={{margin: "1em"}}>
                        create todo
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}