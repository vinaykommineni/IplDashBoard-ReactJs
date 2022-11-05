// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  return (
    <div className="lMDiv">
      <div className="lsDiv">
        <div className="lMLeftDiv">
          <p className="cTName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="lMLogo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="lMRightDiv">
        <p className="rightHead">First Innings</p>
        <p>{firstInnings}</p>
        <p className="rightHead">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="rightHead">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="rightHead">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
