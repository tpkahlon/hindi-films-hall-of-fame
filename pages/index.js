import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu/Menu';
import Person from '../components/Person/Person';
import { grid } from '../styles/index.module.scss';

const sortList = (a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;

export default function Home({ darkMode }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch('/data.json');
      const json = await res.json();
      return json;
    })()
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  let list = null;
  if (data !== null) {
    list = data
      .sort(sortList)
      .map((person, idx) => <Person key={idx} person={person} />);
  }
  return (
    <>
      <Head>
        <title>Bollywood - Hall of Fame</title>
        <link
          rel='shortcut icon'
          href='https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'
          type='image/x-icon'
        />
      </Head>
      <Menu />
      <main className='page'>
        <div className={grid}>{list}</div>
      </main>
    </>
  );
}
