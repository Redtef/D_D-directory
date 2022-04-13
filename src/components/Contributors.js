import React from 'react';
import { useEffect, useState } from 'react';
import IconOpenSea from './IconOpenSea';
import IconDiscord from './IconDiscord';
import IconDevDao from './IconDevDao';
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
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {contributors &&
            contributors.map((contributor, index) => (
              <tr>
                <td width={'3rem'}>
                  <IconDevDao />
                </td>
                <td>{contributor.name}</td>
                <td>
                  <IconOpenSea /> {contributor.NFT}
                </td>
                <td>
                  <IconDiscord /> {contributor.discord}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
