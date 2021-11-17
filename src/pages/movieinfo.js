import React from 'react';
import { Header,Card,MovieCards } from '../components/';
import axios from "axios";    
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

export default function MovieInfo() {
    const params = useParams();
    const [Movie, setMovie] = useState([])
    const [url,setUrl] = useState('');
  
        useEffect(()=> {
            axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=' + params.id)
            .then(result => {
           const MovieData = result.data.data.movie;
           const Movieurl = result.data.data.movie.torrents[0].url;
           console.log(Movieurl)
            setMovie(MovieData);
            setUrl(Movieurl);
            })
            .catch(err =>{
                console.log(err)
            })
            
        }, [params.id])
  

  return <>

            <Header.Frame>
               <Header.Group>
                <Header.Logo src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg"></Header.Logo>
                </Header.Group>
            </Header.Frame><br/>

            <Header.Feature style={{width:'93%',margin:'0px auto'}}>
                <Header.FeatureCallOut>
                <Header.Text style={{}}>{Movie.title}</Header.Text><br/>
                <Header.Text>
                    Year: {Movie.year} | Duration: {(Movie.runtime / 60).toFixed(2)} Hour | Rating: {Movie.rating} / 10 
                </Header.Text><br/>
                <Header.Text>
                    {Movie.description_full}
                </Header.Text><br/>
                <a href={url}><Header.Button>Download</Header.Button></a>
                </Header.FeatureCallOut>
                <Header.FeatureImage src={Movie.medium_cover_image}/>
            </Header.Feature>


</>

}


