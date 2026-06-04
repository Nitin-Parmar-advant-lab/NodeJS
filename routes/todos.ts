import { Router } from "express";

import { Todo } from "../models/todo";

type RequestBody = {
  text: string;
};

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const { text } = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text,
  };
  todos.push(newTodo);

  res.status(201).json({ todo: newTodo });
});

router.put("/todo/:id", (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body as RequestBody;

  // const todoIndex = todos.findIndex((todo) => todo.id === id);

  // if (todoIndex >= 0) {
  //   todos[todoIndex] = { id: todos[todoIndex]!.id, text };
  //   return res.status(200).json({ todo: todos[todoIndex] });
  // }

  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.text = text;
    return res.status(200).json({ todo });
  }

  return res.status(404).json({ error: "Todo not found" });
});

router.delete("/todo/:id", (req, res, next) => {
  const { id } = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex >= 0) {
    todos.splice(todoIndex, 1);
    return res.status(200).json({ message: "Todo deleted" });
  }

  return res.status(404).json({ error: "Todo not found" });
});

export default router;
