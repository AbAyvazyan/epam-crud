import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './src/routes/productRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', productRoutes);

export default app;
