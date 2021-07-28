import '../App.css';
import axios from 'axios';
import {useState,useEffect} from 'react'
import NewsCard from './NewsCard';
function Business() {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    axios.get('/bs')
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
     <h2>Business</h2>
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

export default Business;