// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {cardsData: [], isLoading: true}

  componentDidMount() {
    this.getCardsData()
  }

  getCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedCardsData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({cardsData: updatedCardsData, isLoading: false})
  }

  render() {
    const {cardsData, isLoading} = this.state
    return (
      <div className="homeBg">
        <div className="homeTopDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="homeH1">IPL Dashboard</h1>
        </div>
        <ul className="cardsContainer">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            cardsData.map(each => <TeamCard key={each.id} cardDetails={each} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
