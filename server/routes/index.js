export default (app) => {
  app.get('/api/test', (req, res) => res.send({ message: 'Welcome to PostIt app' }));
};
