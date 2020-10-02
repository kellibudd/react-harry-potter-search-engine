import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard'
import Search from './Search'
import { CardDeck } from 'react-bootstrap';

function App() {

  const apiKey = new Buffer(process.env.REACT_APP_MYAPIKEY, 'base64').toString('ascii');
  /* Converting to base-64 - https://gist.github.com/tomi/0675e58919af4554b198cee3f84405e5 */

  const [data, setData] = useState(null);
  const [filterValue, setFilterState] = useState(null);

  useEffect(() => {
    fetch(`https://www.potterapi.com/v1/characters?key=${apiKey}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, [apiKey]);

  if (data) {

    const handleSearch = searchValue => {
      setFilterState(searchValue)
    }

    const houseData = data.filter(item => 'house' in item)
    
    console.log('filter value before: ', filterValue)
    const filterData = houseData.filter(item => item['name'] === filterValue)

    const displayData = filterData ? houseData : filterData
    console.log('displayData: ', displayData)
    console.log('filter data: ', filterData)
    console.log('houseData: ', houseData)
    console.log('filter value after: ', filterValue)
    /* TO DO: look into useEffect - CharacterCards are not rerendering after search */


    const cards = displayData.map(item => (
      <CharacterCard
        key={item['_id']}
        name={item['name']}
        house={item['house']}
        ministryOfMagic={item['ministryOfMagic']}
        orderOfThePhoenix={item['orderOfThePhoenix']}
        dumbledoresArmy={item['dumbledoresArmy']}
        deathEater={item['deathEater']}
        bloodStatus={item['bloodStatus']}
        species={item['species']}
      />
      )
    )

    return (
      <div>
        <Search onSearch={handleSearch}/>
        <CardDeck>
          {cards}
        </CardDeck>
      </div>
    )
  } 
  return null;
}

export default App;
