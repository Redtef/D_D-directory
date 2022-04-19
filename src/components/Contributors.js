import React from 'react';
import { useEffect, useState } from 'react';
import IconOpenSea from './IconOpenSea';
import IconDiscord from './IconDiscord';
import IconDevDao from './IconDevDao';
export default function Contributors() {
  const [all, setAll] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const callData = () => {
    const context = require.context(
      '../../public/contributors',
      true,
      /.json$/,
    );
    context.keys().forEach((key) => {
      const fileName = key.replace('./', '');
      const resource = require(`../../public/contributors/${fileName}`);
      all.push(JSON.parse(JSON.stringify(resource)));
    });
  };

  useEffect(() => {
    if (dataLoaded === false) {
      callData();
      setDataLoaded(true);
    }
    console.log(all);
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {all &&
            all.map((contributor, index) => (
              <tr key={contributor.discord}>
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
