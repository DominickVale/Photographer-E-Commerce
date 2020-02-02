const _client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})


export const fetchProducts = async () => {
    try{
      const entries = await _client.getEntries({
        content_type: "product",
      })
      console.log(' entries: ', entries)
      return entries.items
    } catch(error) {
      console.error('Error in starting contentful client ', error)
    }
}


export const fetchSingleProduct = async (slug) => {
  const entries = await _client.getEntries({
    content_type: 'product',
    'fields.title': slug
  })

  return {...entries.items[0].fields}
}