var fetch = require('node-fetch');
var redis = require("redis"),
client = redis.createClient();
require("dotenv").config();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}&pageSize=15`
const usURL = `https://newsapi.org/v2/top-headlines&apiKey=${process.env.API_KEY}&pageSize=10`
const busyURL = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.API_KEY}&pageSize=10`
const sportURL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${process.env.API_KEY}&pageSize=10`
const techURL = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${process.env.API_KEY}&pageSize=10`
const entURL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${process.env.API_KEY}&pageSize=10`
async function fetchnews() {
    console.log('fetching news');
    // fetch all pages
        const res = await fetch(`${baseURL}`);
        const news = await res.json()
        console.log(res);
        // console.log('got', resultCount, 'jobs');
        console.log(news.articles);

    // set in redis
    const success = await setAsync('na', JSON.stringify(news.articles));
    console.log(success);

    console.log('fetching news');
    // fetch all pages
        const res2 = await fetch(`${usURL}`);
        const news2 = await res2.json()
        console.log(res2);
        // console.log('got', resultCount, 'jobs');
        console.log(news2.articles);

    // set in redis
    const success2 = await setAsync('in', JSON.stringify(news2.articles));
    console.log(success2);
    //business

    const res3 = await fetch(`${busyURL}`);
    const news3 = await res3.json();
    console.log(res3);
    // console.log('got', resultCount, 'jobs');
    console.log(news3.articles);

// set in redis
    const success3 = await setAsync('bs', JSON.stringify(news3.articles));
    console.log(success3);

    //sports

    const res4 = await fetch(`${sportURL}`);
    const news4 = await res4.json();
    console.log(res4);
    // console.log('got', resultCount, 'jobs');
    console.log(news4.articles);

// set in redis
    const success4 = await setAsync('sp', JSON.stringify(news4.articles));
    console.log(success4);

    //entertainment

    const res5 = await fetch(`${entURL}`);
    const news5 = await res5.json();
    console.log(res5);
    // console.log('got', resultCount, 'jobs');
    console.log(news5.articles);

// set in redis
    const success5 = await setAsync('en', JSON.stringify(news5.articles));
    console.log(success5);

    //technology

    const res6 = await fetch(`${techURL}`);
    const news6 = await res6.json();
    console.log(res6);
    console.log(news6.articles);

// set in redis
    const success6 = await setAsync('te', JSON.stringify(news6.articles));
    console.log(success6);
}

module.exports = fetchnews;