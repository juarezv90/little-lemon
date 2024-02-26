import React from 'react'
import TestimonyCard from './TestimonyCard'

function Testimonies() {
  return (
    <section className="testimonies">
        <div className="container">
          <h3>Testimonies</h3>
          <div className="cardHolder">
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
            <TestimonyCard />
          </div>
        </div>
      </section>
  )
}

export default Testimonies
