import Head from 'next/head';
import Menu from '../../components/Menu/Menu';

export default function About({ darkMode }) {
  return (
    <div>
      <Head>
        <title>About - Hall of Fame</title>
        <link
          rel='shortcut icon'
          href='https://www.flaticon.com/svg/static/icons/svg/610/610333.svg'
          type='image/x-icon'
        />
      </Head>
      <Menu />
      <main className='page'>
        <p>
          Bollywood - Hall of Fame showcase interview of selected actors whose
          life journey will keep you hooked, with lot of hidden gems to embrace.
        </p>
        <p>Built with Next.js...</p>
      </main>
    </div>
  );
}
