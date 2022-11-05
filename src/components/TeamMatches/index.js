// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, matchesData: {}}

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const lMDetails = data.latest_match_details
    const latestMatchDetails = {
      competingTeam: lMDetails.competing_team,
      competingTeamLogo: lMDetails.competing_team_logo,
      date: lMDetails.date,
      firstInnings: lMDetails.first_innings,
      id: lMDetails.id,
      manOfTheMatch: lMDetails.man_of_the_match,
      matchStatus: lMDetails.match_status,
      result: lMDetails.result,
      secondInnings: lMDetails.second_innings,
      umpires: lMDetails.umpires,
      venue: lMDetails.venue,
    }

    let recentMatches = data.recent_matches
    recentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      matchesData: {latestMatchDetails, recentMatches, teamBannerUrl},
      isLoading: false,
    })
  }

  renderMatchesDetails = () => {
    const {matchesData} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = matchesData

    return (
      <div className="matchesDiv">
        <img src={teamBannerUrl} className="bannerImg" alt="team banner" />
        <p className="latestH1">Latest Matches</p>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="cardsDiv">
          {recentMatches.map(each => (
            <MatchCard key={`card ${each.competingTeam}`} matchDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="matchesBg">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderMatchesDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
