import { getConnection } from '../database/database';

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM tasks');

    res.json(rows);
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
};

// Get a task
const getTask = async (req, res) => {
  try {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id = ?', [
      req.params.id,
    ]);

    if (rows.length === 0)
      res.status(404).json({ status: 'Error', message: 'Task not found' });

    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
};

// Create a task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        status: 'Error',
        message: 'Title and description are required',
      });
    }

    const task = {
      title,
      description,
    };

    const connection = getConnection();
    const [rows] = await connection.query('INSERT INTO tasks SET ?', task);

    return res.status(201).json({
      id: rows.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ status: 'Error', message: 'Id is required' });
    }

    if (!title || !description) {
      return res.status(400).json({
        status: 'Error',
        message: 'Title and description are required',
      });
    }

    const task = {
      title,
      description,
    };

    const connection = getConnection();
    const [rows] = await connection.query('UPDATE tasks SET ? WHERE id = ?', [
      task,
      req.params.id,
    ]);

    if (rows.affectedRows === 0)
      res.status(404).json({ status: 'Error', message: 'Task not found' });

    return res.json({
      id: req.params.id,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ status: 'Error', message: 'Id is required' });
    }

    const connection = getConnection();
    const [rows] = await connection.query('DELETE FROM tasks WHERE id = ?', id);

    if (rows.affectedRows === 0)
      res.status(404).json({ status: 'Error', message: 'Task not found' });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ status: 'Error', message: error.message });
  }
};

// Export the functions
export const methods = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
