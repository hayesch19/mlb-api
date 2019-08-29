import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PreviousGames = () => {
  const [prevGame, setPrevGame] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(
      'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4424'
    )
    setPrevGame(resp.data.events)
    console.log(resp.data, 'Previous')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="past-games-area">
      <h3>Past Games</h3>
      <section>
        {prevGame.map((event, i) => {
          return (
            <p key={i}>
              {event.dateEvent} @ {event.strTime} | <u>{event.strEvent}</u>
            </p>
          )
        })}
      </section>
    </section>
  )
}

export default PreviousGames
