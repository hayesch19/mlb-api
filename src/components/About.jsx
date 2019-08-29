import React, { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {
  const [aboutMLB, setAboutMLB] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4424'
    )
    setAboutMLB(resp.data.leagues)
    console.log(resp.data, 'About')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <section className="about-mlb-area">
        <h3>About The MLB</h3>
        <section>
          {aboutMLB.map((league, unicorn) => {
            return <p key={unicorn}>{league.strLeagueAlternate}</p>
          })}
          {aboutMLB.map((league, unicorn) => {
            return <p key={unicorn}>Founded in {league.intFormedYear}</p>
          })}
        </section>
      </section>
    </div>
  )
}

export default About
