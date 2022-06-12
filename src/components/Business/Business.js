import React from 'react'
import PropTypes from 'prop-types'
import './Business.css'

const imageNotAvailableUrl = "https://cuponeaya.mx/wp-content/uploads/2022/02/image-not-available-1.png"

const Business = ({ business }) => {
  return (
        <article className="Business">
            <section className="image-container">
                {business.imageSrc
                    ? <img src={business.imageSrc} alt={business.name}/>
                    : <img src={imageNotAvailableUrl} alt='image not available'/>
                }
                
            </section>
            <h2>{business.name}</h2>
            <section className="Business-information">
                <section className="Business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </section>
                <section className="Business-reviews">
                    <h3>{business.category}</h3>
                    <h3 className="rating">{business.rating} stars</h3>
                    <p>{business.reviewCount} reviews</p>
                </section>
            </section>
        </article>
  )
}

Business.propTypes = {
    business: PropTypes.object
}

export default Business
