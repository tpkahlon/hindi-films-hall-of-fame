import React, { useState, useContext } from 'react';
import ReactLoading from 'react-loading';
import Head from 'next/head';
import Numbers from '../components/Numbers/Numbers';
import Menu from '../components/Menu/Menu';
import Person from '../components/Person/Person';
import Context from '../components/Context/Context.js';
import { grid, gridGallery } from '../styles/index.module.scss';
import Layout from '../components/Layout/Layout';

const sortList = (a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;

export default function Home() {
  const { app } = useContext(Context);
  const { data, maleMode, femaleMode, viewMode } = app;
  let list = <ReactLoading type='bars' color='#000' height={50} width={50} />;
  if (data !== null) {
    if (maleMode) {
      list = data
        .sort(sortList)
        .filter((item) => item.gender === 'male')
        .map((person, idx) => <Person key={idx} person={person} />);
    } else if (femaleMode) {
      list = data
        .sort(sortList)
        .filter((item) => item.gender === 'female')
        .map((person, idx) => <Person key={idx} person={person} />);
    } else {
      list = data
        .sort(sortList)
        .map((person, idx) => <Person key={idx} person={person} />);
    }
  }
  return (
    <Layout>
      <Head>
        <title>Home - Indians</title>
        <link
          rel='shortcut icon'
          href='https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'
          type='image/x-icon'
        />
      </Head>
      <Menu />
      <aside className='aside'>
        <Numbers />
      </aside>
      <main className='page'>
        <div className={viewMode ? `${grid} ${gridGallery}` : grid}>{list}</div>
      </main>
    </Layout>
  );
}
