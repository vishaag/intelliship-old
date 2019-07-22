import Header from './Header';
import Head from 'next/head';


const Layout = props => (
    <div>
        <Head>
            <title>IntelliShip</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
      <Header />
      {props.children}
    </div>
  );

export default Layout;

