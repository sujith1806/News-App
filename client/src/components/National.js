import '../App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
import NewsCard from './NewsCard';
function National() {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/na')
        .then(res=>{
          console.log(res.data);
          setNews(res.data);
        })
        .catch(err=>{
          console.log(err);
        })
    // setNews(s
  },[]);
  return (
    <div className="news-part">
     <h2>National</h2>
     <section className="news-cards">
      {
          news.map((ne)=>
            <NewsCard news={ne} key={ne.title}/>
          )
      }
     </section>
    </div>
  );
}

export default National;