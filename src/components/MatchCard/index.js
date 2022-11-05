// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, result, competingTeamLogo, matchStatus} = matchDetails

  const isWon = matchStatus === 'Won'
  const statusColor = isWon ? 'wonStatus' : 'lostStatus'

  return (
    <li className="cardDiv">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="cardImg"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`mStatus ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
