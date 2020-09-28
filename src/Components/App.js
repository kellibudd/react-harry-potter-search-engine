import React, { useEffect, useState } from 'react';
import Card from './Card'

function App() {

  const apiKey = new Buffer(process.env.REACT_APP_MYAPIKEY, 'base64').toString('ascii');

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://www.potterapi.com/v1/characters?key=${apiKey}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, []);

  if (data) {

    return (
      <div>
        {data.map(item => (
          <Card
            key={item['_id']}
            name={item['name']}
            house={item['house']}
            dumbledoresArmy={item['dumbledoresArmy']}
            deathEater={item['deathEater']}
            bloodStatus={item['bloodStatus']}
          />
        )
        )}
      </div>
    )
  } 
  return null;
}

export default App;
