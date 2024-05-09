import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const Tmdb = () => {
  
  const [Movie, setMovie] = useState([]);
  const getMovie =async()=>{

    const url = 'https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title=Harry%20Potter&output_language=en&show_type=movie&series_granularity=show';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8a1b4fa3femsh49fb6230fdd2d2fp18f4c3jsna832fc4dcc60',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    try {
      const response =   await fetch(url, options);
      const result = await response.json();
      setMovie(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getMovie()
  },[])
  return (
   <>
    
   
   <h1>TMDB api</h1>
   <div className='container-fluid p-2  d-flex flex-wrap justify-content-around'>

    {Movie?.map((Moviedata, index)=>{
      return(

        <div className="card m-2"  key={index} style={{width: '18rem'}}>
        <img src={Moviedata?.imageSet?.horizontalPoster?.w360} className="card-img-top" alt="image"/>
        <div className="card-body">
          <h4 className="card-title fw-bold">{Movie[index]?.originalTitle}</h4>
          <h5 className="card-text">{Movie[index]?.cast[0]}</h5>
          <h6 className="card-text fw-bold">{Movie[index]?.directors[0]}</h6>
          <p className="card-text  ">{Movie[index]?.overview}</p>
          
         </div>
      </div>
      );
    })}
      

   </div>
     
  


   
   </>
  )
}

export default Tmdb