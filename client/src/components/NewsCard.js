import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import '../App.css';


const NewsCard = (props)=>{
    const {news} = props;
    const extra = (
        <a href={news.url}>
        More
        <Icon name='angle double right' />
        </a>
      );
      // console.log(Date.parse(news.publishedAt));
    return (<Card
        color='red'
        image={news.urlToImage}
        header={news.title}
        meta={news.source.name}
        description={news.description}
        extra={extra}
        className="cardstyle"
      />);
}


export default NewsCard;
