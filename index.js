const express = require('express')
const app = express()
const PORT = process.env.PORT||5000;
const redis = require('redis');
const path = require('path');
//setting up cron job
var CronJob = require('cron').CronJob;

const fetchnews = require('./tasks/news-fetcher');

new CronJob('0 */2 * * * ', fetchnews, null, true, 'America/Los_Angeles');

//main 

require("dotenv").config();
var cors = require('cors')
app.use(cors());

const client = redis.createClient({
  host: process.env.REDIS_HOSTNAME,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);
app.get('/in', async(req, res) => {
  let international = await getAsync('in');
  res.send(international);
})

app.get('/na', async(req, res) => {
  let national = await getAsync('na');
  res.send(national);
})

app.get('/bs', async(req, res) => {
  let business = await getAsync('bs');
  res.send(business);
})

app.get('/sp', async(req, res) => {
  let sports = await getAsync('sp');

  res.send(sports);
})
app.get('/en', async(req, res) => {
  let entertainment = await getAsync('en');
  res.send(entertainment);
})
app.get('/te', async(req, res) => {
  let technology = await getAsync('te');
  res.send(technology);
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('news-app/build'));

  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'news-app','build','index.html')))
}

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})