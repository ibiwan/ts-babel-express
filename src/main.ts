import express from 'express';

const app: express.Application = express();

app.set('view engine', 'pug')
app.set('views', 'src/views')

app.use('/', (req, res) => {
  res.render(
    'idx',
    {
      title: 't',
      name: 'cool beans'
    }
  )
});

app.listen(3000, () => console.log('listening on 3000'));
