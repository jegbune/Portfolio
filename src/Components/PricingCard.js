import { Link } from 'react-router-dom'
import './PricingCardStyles.css'
import React from 'react'

const cards = [
    {
        id:1,
        package: '- Basic -',
        price: '$ 100',
        duration: '- 3 Days -',
        size: '- 3 Pages -',
        sponsor: '- Featured -',
        type: '- Responsive Design -'
    },
    {
        id:2,
        package: '- Premium   -',
        price: '$ 200',
        duration: '- 2 Days -',
        size: '- 5 Pages -',
        sponsor: '- Featured -',
        type: '- Responsive Design -'
    },
    {
        id:3,
        package: '- Business -',
        price: '$ 300',
        duration: '- 5 Days -',
        size: '- 8 Pages -',
        sponsor: '- Featured -',
        type: '- Responsive Design -'
    },


    ]


function PricingCard() {
  return (
    <div className='pricing'> 
        <div className='card-container'>
            
            {cards.map( card =>(
            <div className='card' key={card.id}>
                <h3>{card.package}</h3>
                <span className='bar'></span>
                <p className='btc'>{card.price}</p>
                <p>{card.duration}</p>
                <p>{card.size}</p>
                <p>{card.sponsor}</p>
                <p>{card.type}</p>
                <Link to='/contact' className='btn' >PURCHASE NOW</Link>
            </div>                

            )
             )}
            
        </div>
     
    </div>
  )
}

export default PricingCard
