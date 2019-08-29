import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [nextGame, setNextGame] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4424'
    )
    setNextGame(resp.data.events)
    console.log(resp.data, 'Upcoming')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="upcoming-games-area">
      <h3>Upcoming Games</h3>
      <section>
        {nextGame.map((event, i) => {
          return (
            <p key={i}>
              {event.dateEvent} @ {event.strTime} | {event.strEvent}
            </p>
          )
        })}
      </section>
    </section>
  )
}

export default HomePage
