export const SearchResultList = ({searchResult}) => {
  return (
    <div>
    {
        searchResult.map((results, id) => {
            return <div key={id} onClick={(e) => input.value(results.name)}>{results.name + ", " + results.country}</div>
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



