// Next.js
import type { NextPage } from 'next';
import Link from 'next/link';

// Original
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout type="website" robots="index,follow" title="" description="" image_url="" url="">
      <div className="container">
        <main>
          <h1 className="title">Welcome to <span className="site-logo">HTML Editor</span>!</h1>
          <p className="description">
            Let's change text to HTML.
            <code>&lt;h1&gt;HTML Editor&lt;/h1&gt;</code>
          </p>

          <div className="grid">
            <Link href="/create">
              <a className="card">
                <h2>Create &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Link>

            <Link href="/create">
              <a className="card">
                <h2>Learn &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Link>

            <Link href="/create">
              <a className="card">
                <h2>Create &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Link>

            <Link href="/create">
              <a className="card">
                <h2>API &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home;
