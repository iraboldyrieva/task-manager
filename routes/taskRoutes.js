import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middleware/checkAuth.js';
import checkAdmin from '../middleware/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

/**
 * @openapi
 * '/api/task':
 *  post:
 *     tags:
 *     - Task
 *     summery: Create a task
 *     security:
 *      - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *          applictaion/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  default: Buy a book
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         descriprion: Bad Request
 */

router.post('/task', taskController.createTask);

/**
 * @openapi
 * '/api/task':
 *  get:
 *     tags:
 *     - Task
 *     summery: Get users tasks
 *     security:
 *      - basicAuth: []
 *     responses:
 *       200:
 *        description: Success
 *        content:
 *         applictaion/json:
 *           schema:
 *             type: array
 *             items: 
 *              type: object
 *              properties:
 *                id:
 *                 type: string
 *                description:
 *                 type: string
 *                completed:
 *                 type: boolean
 *                createdBy:
 *                 type: string

 *       400:
 *        descriprion: Bad Request
 */

router.get('/task', taskController.getTasksByUserId);
router.get('/task/all', checkAdmin, taskController.getAllTasks);
router.get('/task/:id', taskController.getTask);

router.put('/task/:id', taskController.updateTask);

router.delete('/task/:id', taskController.deleteTask);

export default router;
