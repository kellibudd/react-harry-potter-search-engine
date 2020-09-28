import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard'
import { CardDeck } from 'react-bootstrap';

function App() {

  const apiKey = new Buffer(process.env.REACT_APP_MYAPIKEY, 'base64').toString('ascii');

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.potterapi.com/v1/characters?key=${apiKey}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, [apiKey]);

  if (data) {
    const filteredData = data.filter(item => 'house' in item)
    
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
      <CardDeck>
        {cards}
      </CardDeck>
    )
  } 
  return null;
}

export default App;
