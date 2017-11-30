import express from 'express';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import path from 'path';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from '../webpack.config.dev';
import UserRoutes from './routes/users';
import GroupRoutes from './routes/groups';

require('dotenv').config();

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(favicon(path.join(__dirname, '../client/favicon.ico')));
app.use('/apidocs', express.static(path.resolve(__dirname, '../apidocs')));

app.use('/api/user', UserRoutes);
app.use('/api/group', GroupRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/src/index.html'));
});

// routes(app);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});

export default app;
