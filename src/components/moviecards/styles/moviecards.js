// import styled from 'styled-components/macro';

// export const Container = styled.div`
//     padding: 0 !important;
//     width: 22rem;
//     margin:14px; 
//     border-radius: 10px solid blue;
//     box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
// `;

// export const MovieImage = styled.img`
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//     height: 33rem;
// `;

// export const MovieInfo = styled.p`
//     color: #5e5c5c;
// `;

// export const MovieTitle = styled.p`
//     width: 80%;
//     height: 4rem;
// `;

// export const MovieButton = styled.p`
//     background-color: #ff3d49;
//     position: absolute;
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     right: 20px;
//     bottom: 111px;
//     font-size: 27px;
//     padding-left: 21px;
//     padding-top: 16px;
//     color: #FFFFFF;
//     cursor: pointer;
// `;

// export const Lol = styled.p`
//   font-size: 24px;
//   color: blue
// `;



// <!DOCTYPE html>
// <html>
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>movieCard</title>
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
//   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
//   <style>
//     img {
//         -webkit-user-drag: none;
//         -moz-user-drag: none;
//         -o-user-drag: none;
//         user-drag: none;
//     }
//     img {
//       pointer-events: none;
//     }
//     
//     .play_button{

//     }

//     .credits{
//       margin-top: 20px;
//       margin-bottom: 20px;
//       border-radius: 8px;
//       border: 2px solid #8e24aa;
//       font-size: 18px;
//     }
//     .credits .card-body{
//       padding: 0;
//     }
//     .credits p{
//       padding-top: 15px;
//       padding-left: 18px;
//     }
//     .credits .card-body i{
//       color: #8e24aa;
//     }
//   </style>
// </head>
// <body>
  
// </body>
// <div class="container mt-5">
//   <h2 class="text-center">Bootstrap movie cards</h2>
//   <div class="row justify-content-center">

//     <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">POKEMON Detective Pikachu</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

//         <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">Toy Story 4</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

//         <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2019/02/captin-marvel-poster-international.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">Captain Marvel</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

//         <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Spider-Man-Far-From-Home-poster-1.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">Spider-Man: Far From Home</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

//         <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">Alita: Battle Angel</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

//         <div class="card movie_card">
//       <img src="https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg" class="card-img-top" alt="...">
//       <div class="card-body">
//         <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
//         </i>
//         <h5 class="card-title">Spider-Man: Into the Spider-Verse</h5>
//           <span class="movie_info">2019</span>
//           <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
//       </div>
//     </div>

    

//   </div>

//       <div class="row col-md-12 justify-content-center">
//         <div class="card credits col-md-4 ">
//             <div class="card-body">
//                 <p>Made with <i class="fas fa-heart"></i> by Sukhmeet Singh.</p>
//             </div>
//         </div>
//       </div>
// </div>



// </html>