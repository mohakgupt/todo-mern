import {Button, Card, CardActions, CardContent} from "@mui/material"
import Icon from "@mui/material/Icon";

function TodoCard({data, handleEdit, handleDelete}){
    const {_id, title, description} = data;
    return(
        <Card sx={{margin: "0.5em"}} className={`todo-card todo-card-${_id}`}>
            <CardContent>
                <h1>{title}</h1>
                <p>{description}</p>
            </CardContent>
            <CardActions>
                <Button onClick={()=>{handleEdit(_id)}}>
                    <Icon>edit</Icon>
                    &nbsp;Edit
                </Button>
                <Button onClick={()=>{handleDelete(_id)}} color="warning">
                    <Icon>delete</Icon>
                    &nbsp;Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default TodoCard