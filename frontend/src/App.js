import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/todo-list";
import { CreateTodo } from "./components/add-todo";
import { Typography } from "@mui/material";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Typography variant="h1" sx={{ textAlign: "center"}}>TODO</Typography>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="create-todo" element={<CreateTodo/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
