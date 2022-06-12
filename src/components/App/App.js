import { useState, React } from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import Yelp from '../../util/Yelp'

const App = () => {
  const [businesses, setBusinesses] = useState([])
  const [message, setMessage] = useState({ text: '', show: false })

  const searchYelp = (term, location, sortBy) => {
    setMessage({ text: 'Loading...', show: true })

    Yelp.search(term, location, sortBy)
      .then(businessesFound => {
        if (!businessesFound.error) {
          setBusinesses(businessesFound)
          setMessage({ text: '', show: false })
        } else {
          const errorMessage = `Sorry. ${businessesFound.error.description}`
          throw new Error(errorMessage)
        }
      })
      .catch(error => {
        setMessage({text: error.message, show: true})
      })
  }

  return (
    <main className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      {message.show
        ? <h2 className='message'>{message.text}</h2>
        : <BusinessList businesses={businesses}/>
      }
    </main>
  )
}

export default App
