const apiKey = process.env.REACT_APP_APIKEY
const Yelp = {
  search: async (term, location, sortBy) => {
    const h = new Headers()
    h.append('Accept', 'application/json')
    h.append('Content-Type', 'application/json')
    h.append('Authorization', `Bearer ${apiKey}`)

    const req = new Request(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      method: 'GET',
      headers: h
    })
    
    try {
      const response = await fetch(req)
      const jsonResponse = await response.json()

      if (jsonResponse.error) {
        return jsonResponse
      } else if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          adress: business.location.adress1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories.alias,
          rating: business.rating,
          reviewCount: business.review_count
        }))
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default Yelp
