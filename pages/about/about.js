import Head from 'next/head';
import Menu from '../../components/Menu/Menu';
import Numbers from '../../components/Numbers/Numbers';
import Layout from '../Layout/Layout';

export default function About({ darkMode }) {
  return (
    <Layout>
      <Head>
        <title>About - Hall of Fame</title>
        <link
          rel='shortcut icon'
          href='https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'
          type='image/x-icon'
        />
      </Head>
      <aside className='aside'>
        <Numbers />
      </aside>
      <Menu />
      <main className='page'>
        <h2>About</h2>
        <p>
          Hindi Icons - Hall of Fame showcase interview of selected actors and
          TV personalities whose life journey will keep you hooked, with lot of
          hidden gems to embrace.
        </p>
        <p>Built with Next.js...</p>
        <h2>How to contribute?</h2>
        <p>
          If you know of any icon who needs to be on the list, please send a
          pull request at{' '}
          <a
            href='https://github.com/tpkahlon/hindi-icons-hall-of-fame/pulls'
            target='noopener noreferrer'
            target='_blank'
          >
            Source
          </a>
          . Add information of respective icon in this{' '}
          <a
            href='https://github.com/tpkahlon/hindi-icons-hall-of-fame/blob/master/public/data.json'
            target='noopener noreferrer'
            target='_blank'
          >
            file
          </a>
          .
        </p>
      </main>
    </Layout>
  );
}
