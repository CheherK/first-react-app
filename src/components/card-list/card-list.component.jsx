// import { Component } from "react";
import '../card/card.component'
import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({monsters, className}) => 

   (<div className={`card-list ${className}`}>
      {monsters.map((monster) => {
         return (
            <Card monster={monster}/>
         )
      }
      )}
   </div>)


// class CardList extends Component {

//    render() {

//       const { monsters, className } = this.props;

//       return (
//          <div className={`card-list ${className}`}>
//             {monsters.map((monster) => {
//                return (
//                   <Card monster={monster}/>
//                )
//             }
//             )}
//          </div>
//       )
//    }

// }

export default CardList;