// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="linkStyle">
      <li className="TeamCardDiv">
        <img className="teamImg" src={teamImageUrl} alt={`${name}`} />
        <p className="teamH1">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
