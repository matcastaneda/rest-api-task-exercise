import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to my REST API!</h2>

    <p>GET (/api/tasks) --> <a style="text-decoration: none" href="/api/tasks">Get All Tasks</a></p>
    <p>GET (/api/tasks/:id) --> <a style="text-decoration: none" href="/api/tasks/1">Get Task by ID</a></p>
    <p>POST (/api/tasks) --> <a style="text-decoration: none" href="/api/tasks">Create Task</a></p>
    <p>PUT (/api/tasks/:id) --> <a style="text-decoration: none" href="/api/tasks/1">Update Task by ID</a></p>
    <p>DELETE (/api/tasks/:id) --> <a style="text-decoration: none" href="/api/tasks/1">Delete Task by ID</a></p>
  `);
});

export default router;
