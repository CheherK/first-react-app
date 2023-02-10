// import { Component } from "react";
import './card.styles.css';

const Card = ({monster: {id, name, email}}) => 

   (<div key={id} className='card'>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=300x300`} />
      <h2>{name}</h2>
      <p>{email}</p>
   </div>)

// class Card extends Component {
//    render() {
//       const {id, name, email} = this.props.monster;
//       return(
//          <div key={id} className='card'>
//             <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=300x300`} />
//             <h2>{name}</h2>
//             <p>{email}</p>
//          </div>
//       )
//    }
// }

export default Card;