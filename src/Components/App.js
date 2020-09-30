import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard'
import Search from './Search'
import { CardDeck } from 'react-bootstrap';

function App() {

  const apiKey = new Buffer(process.env.REACT_APP_MYAPIKEY, 'base64').toString('ascii');
  /* Converting to base-64 - https://gist.github.com/tomi/0675e58919af4554b198cee3f84405e5 */

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.potterapi.com/v1/characters?key=${apiKey}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, [apiKey]);

  if (data) {
    const filteredData = data.filter(item => 'house' in item)
    /* TO DO: set state as filtered data and when search input is activated - update state with filtered data 
    TO DO: look into react router */

    const cards = filteredData.map(item => (
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
        <Search />
        <CardDeck>
          {cards}
        </CardDeck>
      </div>
    )
  } 
  return null;
}

export default App;
