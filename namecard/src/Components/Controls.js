import React from 'react'
import './Controls.css'

export default function Controls(props){
 return(
   <div className="button-display">
     <button className='Previous' onClick={props.previous}>{'< Previous'}</button>
     <button className='Next' onClick={props.next}>{'Next >'}</button>
   </div>
 )
}
