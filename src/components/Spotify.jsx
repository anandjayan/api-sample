import { useEffect, useState } from "react";

const Spotify = () => {

  const [Music, setMusic] = useState([]);

  const getMusic = async()=>{
    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8a1b4fa3femsh49fb6230fdd2d2fp18f4c3jsna832fc4dcc60',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMusic(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getMusic()
  },[])
  
  return (
    <>
     <h1>Spotify api</h1>
    <div className="main">
     
  {Music?.users?.items?.map((musicData, index) => {
    const albumData = Music?.albums?.items[index]?.data;
    // const userName = musicData?.data?.displayName;
    return (
      <div className="music-card" key={index}>
        <img src={musicData?.data?.image?.largeImageUrl} alt="pics" />
        <h2>{albumData?.date?.year}</h2>
        <h2>{albumData?.name}</h2>
      </div>
    );
  })}
  </div>
     
    </>
  )
}

export default Spotify