import React from 'react';
import {Container, MovieImage, MovieInfo,MovieTitle,MovieButton} from './styles/moviecards';

export default function MovieCards({children, ...restprops}){
    return (<Container {...restprops}>{children}</Container>)
    
}


MovieCards.MovieInfo = function MovieCardsMovieInfo({children, ...restprops}){
    return <MovieInfo {...restprops}>{children}</MovieInfo>
}

MovieCards.MovieImage = function MovieCardsMovieImage({children, ...restprops}){
    return <MovieImage {...restprops}>{children}</MovieImage>
}

MovieCards.MovieTitle = function MovieCardsMovieTitle({children, ...restprops}){
    return <MovieTitle {...restprops}>{children}</MovieTitle>
}

MovieCards.MovieButton = function MovieCardsMovieButton({children, ...restprops}){
    return <MovieButton {...restprops}>{children}</MovieButton>
}



