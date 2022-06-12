import { useState, React } from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

const SearchBar = ({ searchYelp }) => {
  //  States
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [sortBy, setSortBy] = useState('best_match')

  //  Handlers
  const handleSortByChange = ({ target }) => {
    const sortByOptionName = target.innerText
    console.log(sortByOptionName, sortByOptions[sortByOptionName])
    setSortBy(sortByOptions[sortByOptionName])
  }

  const handleTermChange = ({ target }) => {
    setTerm(target.value)
  }

  const handleLocationChange = ({ target }) => {
    setLocation(target.value)
  }

  const handleSearch = () => {
    searchYelp(term, location, sortBy)
    setTerm('')
    setLocation('')
    setSortBy('best_match')
  }

  //  Helpers
  const getSortByClassName = sortByOption => sortBy === sortByOption ? 'active' : ''

  const renderSortByOptions = () => {
    const keys = Object.keys(sortByOptions)

    return keys.map(keyName => {
      const sortByOptionValue = sortByOptions[keyName]
      return (
          <li key={sortByOptionValue} className={getSortByClassName(sortByOptionValue)} onClick={handleSortByChange}>
            {keyName}
          </li>
      )
    })
  }

  return (
        <article className="SearchBar">
            <section className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </section>
            <section className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={handleTermChange} value={term}/>
                <input placeholder="Where?" onChange={handleLocationChange} value={location}/>
            </section>
            <section className="SearchBar-submit">
                <a onClick={handleSearch}>Let&apos;s Go</a>
            </section>
        </article>
  )
}

SearchBar.propTypes = {
  searchYelp: PropTypes.func
}

export default SearchBar
