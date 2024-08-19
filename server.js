import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import './config/db.js';

//Routes
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import swaggerSpec from './config/swagger.js';

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRoutes);
app.use('/api/', taskRoutes);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
