const getTodos = async () => {
  const response = await fetch(`/.netlify/functions/getTodos`);
  const todos = await response.json();
  return todos.length ? todos : [];
};

const createTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/createTodo", {
    body: JSON.stringify(todo),
    method: "POST",
  });
  return response.json();
};

const updateTodo = async (todo) => {
  const response = await fetch("/.netlify/functions/updateTodo", {
    body: JSON.stringify(todo),
    method: "PUT",
  });
  return response.json();
};

const deleteTodo = async (id) => {
  const response = await fetch("/.netlify/functions/deleteTodo", {
    body: JSON.stringify({ id }),
    method: "POST",
  });
  return response.json();
};

export default {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
