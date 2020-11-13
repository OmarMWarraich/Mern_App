import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';


function TinderCards() {
// eslint-disable-next-line    
const [people, setPeople] = useState([
    {
        name: 'Elon Musk',
        url:"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
        
    },
    {
        name: 'Jeff Bezos',
        url:"https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
        
    },
    {
        name: 'Sandra Bullock',
        url:"https://static.hollywoodreporter.com/sites/default/files/2019/06/sandra_bullock-getty-h_2019_-928x523.jpg",
        
    }
]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};

return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
             <TinderCard
               className = "swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir) => swiped(dir, person.name)}
               onCardLeftScreen={() => outOfFrame(person.name)}     

             >
               <div
                 // eslint-disable-next-line no-template-curly-in-string
                 style={{ backgroundImage: "url(" + person.url + ") "}}
                 className="card"
                 alt=""
                 
                 >
                     <h3>{person.name}</h3>
                     </div>  

             </TinderCard>
         ))}   
        </div>
        </div>
    );
}

export default TinderCards;
