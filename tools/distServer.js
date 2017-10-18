import express from 'express';
// import webpack from 'webpack';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

import UserRoutes from '../server/routes/users';
import GroupRoutes from '../server/routes/groups';


const port = 3000;
const app = express();
// const compiler = webpack(config);


// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(compression());
app.use(express.static('dist'));

app.use('/api/user', UserRoutes);
app.use('/api/group', GroupRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// routes(app);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});

export default app;
