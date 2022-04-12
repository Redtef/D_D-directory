import React from 'react';
import { useEffect, useState } from 'react';
import IconOpenSea from './IconOpenSea';
import IconDiscord from './IconDiscord';
export default function Contributors() {
  const [contributors, setContributorsList] = useState([]);

  const getData = () => {
    fetch('contributors/contributors.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContributorsList(data);
        console.log(contributors);
      });
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* <ul>
        {contributors &&
          contributors.map((contributor) => (
            <li>
              {contributor.name}
              <IconOpenSea />
              {contributor.NFT}
              <IconDiscord />
              {contributor.discord}
            </li>
          ))}
      </ul> */}

      <div className="container">
        {contributors &&
          contributors.map((contributor, index) => (
            <div key={index} className="container-item">
              {contributor.name}
              <IconOpenSea />#{contributor.NFT}
              <IconDiscord />
              {contributor.discord}
            </div>
          ))}
      </div>
    </div>
  );
}
