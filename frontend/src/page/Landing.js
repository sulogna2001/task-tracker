import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const [editMode, setEditMode] = useState(false);
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [userId, setUserId] = useState("");

  const showTodos = async () => {
    try {
      const { data } = await axios.get("/api/show/todos");
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addtodo = async (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    try {
      const add = await axios.post("/api/create/list", { task });
      if (add.status === 200) {
        setTask("");
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const todoDelete = await axios.delete(`/api/delete/todo/${id}`);
      if (todoDelete.status === 200) {
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showSingleTodo = async (id) => {
    setEditMode(true);
    try {
      const { data } = await axios.get(`/api/todo/${id}`);
      setTask(data.task);
      setUserId(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    try {
      const edit = await axios.put(`/api/update/todo/${userId}`, { task });
      if (edit.status === 200) {
        setEditMode(false);
        setTask("");
        showTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showTodos();
  }, []);

  return (
    <div className="h-screen bg-blue-100">
      <div className="container mx-auto p-12">
        <div className="bg-white rounded shadow p-12">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Todo List</h1>
          <form onSubmit={editMode ? editTodo : addtodo} className="mb-4">
            <div className="flex items-center">
              <input
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className="flex-grow p-2 border border-blue-300 rounded mr-2"
                type="text"
                placeholder="Add Task"
                name="Task"
              />
              <button
                type="submit"
                className={`p-2 rounded ${
                  editMode
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {editMode ? "Edit" : "+ Add"}
              </button>
            </div>
          </form>

          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-blue-200">Task</th>
                <th className="py-2 px-4 border-b border-blue-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map((d) => (
                <tr key={d.id}>
                  <td className="py-2 px-4 border-b border-blue-200">
                    {d.task}
                  </td>
                  <td className="py-2 px-4 border-b border-blue-200">
                    <button
                      onClick={() => showSingleTodo(d.id)}
                      className="text-blue-500 mr-2"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => deleteTodo(d.id)}
                      className="text-red-500"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;
