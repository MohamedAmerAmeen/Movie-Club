import React,{useContext, useState, useEffect} from 'react';
import { SelectProfilecontainer } from './profile';
import { FirebaseContext } from '../context/firebase';
import { Header,Card } from '../components/';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MoviesList from '../components/MoviesComponent/MoviesList';

export function BrowseContainer() {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true);
    const {firebase} = useContext(FirebaseContext)
    const user= firebase.auth().currentUser || {};


    const [MovieName, setMovieName] = useState('');
    const [MovieList, setMovieList] = useState([]);



    
    useEffect(()=>{
        axios.get('https://yts.mx/api/v2/list_movies.json')
        .then(result => {
            const MovieData = result.data.data.movies;
            const Movies = []
            for(const key in MovieData){
                Movies.push({id: key, name: MovieData[key].name})
            }
            setMovieList(MovieData);

        })
    }, [MovieName]);


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },30003000)
    },[profile.displayName]);



    if(profile.displayName == null){
        return (
            <SelectProfilecontainer user={user} setProfile={setProfile}/>
        );
    }else{
        return <>
        <Header  dontShowOnSmallViewPort>
            <Header.Frame>
               <Header.Group>
                <Header.Logo src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg"></Header.Logo>
                {/* <Header.TextLink>Films</Header.TextLink>
                <Header.TextLink>Series</Header.TextLink> */}
                </Header.Group>

                <Header.Group>
                <Header.Profile>
                    <Header.Picture src = "https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/users/4.png"></Header.Picture>
                    <Header.Dropdown>
                        <Header.Group>
                        <Header.TextLink>{profile.displayName}</Header.TextLink>
                        </Header.Group>
                
                    <Header.Group>
                        <Header.TextLink onClick={()=>firebase.auth().signOut()}>Sign Out</Header.TextLink>
                    </Header.Group>
                    </Header.Dropdown>
                </Header.Profile>
                </Header.Group>
            </Header.Frame>
            {/* <Header.Feature addPadding style={{width:'93%',margin:'0px auto'}}>
                <Header.FeatureCallOut>
                <Header.Text>Watch Joker Now</Header.Text><br/>
                <Header.Text style={{width:'40%'}}>
                Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                City.
                </Header.Text>
                <Header.Button>Play</Header.Button>
                </Header.FeatureCallOut>
                
            </Header.Feature> */}
        </Header> 

            {/* <Card.Title>{myMovie.genres[0]}</Card.Title> */}
             {/*  the whole row */}
             <body>
                <div className="wrap">
                <div id="columns" class="columns_4">
              {MovieList.map((item) => (

            <figure>
            <img src={item.large_cover_image}/>
                <figcaption>{item.title}</figcaption>
                <span class="price">{item.description}</span>
                <Link to={{pathname: `/MovieInfo/${item.id}`, query: { id: item.id }}}>
                <a class="button" href="#">Movie Details</a>
                </Link>
                </figure>

                   // <Card.Item key={item.id} item={item}>
                //   <Link to={{pathname: `/MovieInfo/${item.id}`, query: { id: item.id }}}><Card.Image src={item.large_cover_image} /></Link>
                //   <Card.Meta>
                //     <Card.SubTitle>{item.title}</Card.SubTitle>
                //     <Card.Text>{item.description}</Card.Text>
                //   </Card.Meta>
                // </Card.Item>
              ))} 
 </div>
            </div>
            </body>        
         
        </>
    }

}


