const apiKey = process.env.REACT_APP_APIKEY

const Yelp = {
  search: async (term, location, sortBy) => {
    try {
      const response = 
        await fetch(`/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        })
    
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
