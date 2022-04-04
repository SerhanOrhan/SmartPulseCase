const cors = require('cors');
const express = require('express');
const { reportController } = require('./fetch-server');
const app = express()
const port = 8090

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Fetch Server Running') // 8090 port nuamrası gırıldıgınde mesaj.
});

app.get('/transparency/service/market/intra-day-trade-history', reportController.index);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})