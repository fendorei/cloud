import React, {useState, useEffect} from 'react';

function App() {
  const [db, setInfluencer] = useState(false);
  useEffect(() => {
    getInfluencer();
  }, []);
  function getInfluencer() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setInfluencer(data);
      });
  }
  return (
    <div>
      {db ? db : 'There is no influencer data available'}
    </div>
  );
}
export default App;
