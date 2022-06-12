import React from 'react'
import PropTypes from 'prop-types'
import './BusinessList.css'
import Business from '../Business/Business'

const BusinessList = ({ businesses }) => {
  return (
        <ul className="BusinessList">
            { businesses.map(business => <Business key={business.id} business={business}/>) }
        </ul>
  )
}

BusinessList.propTypes = {
  businesses: PropTypes.array
}

export default BusinessList
