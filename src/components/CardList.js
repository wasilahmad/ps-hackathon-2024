import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
    const [matches, setMatches] = useState([]);
    var apiKey = 'https://mocki.io/v1/6ba6f33c-24cf-4827-8c1c-c30b1209eb1a';

    useEffect(() => {
        // Function to read query parameters from the URL
        const getQueryParam = (name) => {
            const params = new URLSearchParams(window.location.search);
            return params.get(name);
        };
  
      // Read the 'param' query parameter from the URL on component mount
      const initialParamValue = getQueryParam('team');
        if (initialParamValue === 'Italy') {
            apiKey = 'https://mocki.io/v1/3f40fdad-3608-4645-85e6-54537141a69b';
        } else if (initialParamValue === 'Brazil') {
            apiKey = 'https://mocki.io/v1/06c44285-cc9b-4f5d-aa6d-670208bff537';
        }
        fetch(apiKey)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setMatches(data.matches);
            });   
    }, []);

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2 mb-4">Booking available for upcoming matches</h2>
                </div>
            </div>
                              
            {
                matches.map((match, index) => {
                    return <section key={index}>
                            <p className="mb-4"><strong>{match.match}</strong> at <strong>{match.city}</strong> on <strong>{match.date}</strong></p>
                            <div className="row">
                                {
                                match.Hotels.map((hotel, i) => (
                                    <div className="col-md-4" key={i}> <Card data={hotel} index={i}/></div>
                                ))
                                }                                
                            </div>
                            <div className="space-bar"></div>
                        </section>                  
                })
            }
        </div>
        </>     
    );
  };
  
  export default CardList;