import Task from "../models/Task.js";

let message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";      
    }, 1000);  
    const taskList = await Task.find();
  
    return res.render("index", { 
      taskList, 
      task: null, 
      taskDelete: null, 
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task.task) {
    message = "Insira um texto, antes de adicionar uma tarefa!";
    type = "danger";
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    message = "Tarefa criada com sucesso!";
    type = "success";
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    const taskList = await Task.find();
    if (req.params.method === "update") {
      res.render("index", { task, taskDelete: null, taskList, message, type });
    } else {
      res.render("index", { task: null, taskDelete: task, taskList, message, type });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateOneTask = async (req, res) => {
  try {
    const task = req.body;
    await Task.updateOne({ _id: req.params.id }, task);
    message = "Tarefa atualizada com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteOneTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.deleteOne({ _id: req.params.id });
    message = "Tarefa deletada com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const taskCheck = async (req, res) => {
  try {
const task = await Task.findOne({ _id: req.params.id });
   
task.check ? task.check = false : task.check = true;



await Task.updateOne({ _id: req.params.id }, task);
res.redirect("/");
  } catch (err) {
res.status(500).send({ error: err.message });
  }
}

  

export default {
  getAllTasks,
  createTask,
  getById,
  updateOneTask,
  deleteOneTask,
  taskCheck, // se existir
};
