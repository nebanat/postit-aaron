import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

import UserRoutes from '../server/routes/users';
import GroupRoutes from '../server/routes/groups';


const port = process.env.PORT || 5000;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, '../client/favicon.ico')));

app.use('/api/user', UserRoutes);
app.use('/api/group', GroupRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port);

export default app;
