import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = () => {

  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles));
    
  }, [])
  
  return (
    <div>
      <h2 className="text-center ">Latest <span className="badge bg-danger text-light">News</span></h2>
      {Articles.map((news, index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default Newsboard