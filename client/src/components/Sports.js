import '../App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
import NewsCard from './NewsCard';
function Sports() {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    console.log('nothiungsdcsdcs')
    axios.get('http://localhost:5000/sp')
        .then(res=>{
          console.log(res.data);
          setNews(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    // setNews(sample);
  },[]);


  return (
    <div className="news-part">
     <h2>Sports</h2>
     <section className="news-cards">
      {
          news.map((ne)=>{
            return (<NewsCard news={ne} key={ne.title}/>);

          }
          )
      }
     </section>
    </div>
  );
}

export default Sports;
