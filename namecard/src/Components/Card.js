import React from 'react'
import './Card.css'

export default function Card(props){
 return (
   <div>
     <div className="text-container">
      <div className="text-id">
         <p>{props.person.id}/25</p>
      </div>
      <div className="name-text">
       <p>{props.person.name.first} {props.person.name.last}</p>
      </div>
      <div className="people-info">
       <p>From: {props.person.city}, {props.person.country}</p>
       <p>Job Title: {props.person.title}</p>
       <p>Employer:{props.person.employer}</p>
      </div>
      <div className="Fav-movies">Favorite Movies:</div>
      <div className="movies">
       <p>1: {props.person.favoriteMovies[0]}</p>
       <p>2: {props.person.favoriteMovies[1]}</p>
       <p>3: {props.person.favoriteMovies[2]}</p>
      </div>
     </div>
   </div>
 )
}
