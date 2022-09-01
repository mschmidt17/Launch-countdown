import React from 'react';
import './CSS/Count.css';

const Count = props => {

   return(
      <div className="card-flip">
         <span className="card-number">
            <span className="card-number-top" />
            {props.count}
         </span>
         <p>{props.time}</p>
      </div>
   );
}

export default Count;