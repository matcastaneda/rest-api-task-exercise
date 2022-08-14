import { Router } from 'express';
import { methods as taskController } from '../controllers/task.controllers';

// * Initialization of the router.
const router = Router();

// * Get all tasks
router.get('/', taskController.getTasks);

// * Get a task
router.get('/:id', taskController.getTask);

// * Create a task
router.post('/', taskController.createTask);

// * Update a task
router.put('/:id', taskController.updateTask);

// * Delete a task
router.delete('/:id', taskController.deleteTask);

export default router;
