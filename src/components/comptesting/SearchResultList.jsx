export const SearchResultList = ({searchResult}) => {
  return (
    <div>
    {
        searchResult.map((results, id) => {
            return <div key={id}>{results.name}</div>
        }
    )}
    {/* {searchResult.length === 0
  ? <p>No cities found</p>
  : <ul>
    {searchResult.map(city => <li key={city.id}>{city.name}</li>)}
  </ul>
}  */}
    </div>
  )
}



