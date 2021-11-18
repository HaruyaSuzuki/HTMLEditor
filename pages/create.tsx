// Next.js
import type { NextPage } from 'next';

// Original
import Layout from '../components/layout';

const CreatePage: NextPage = () => {
  return (
    <Layout type="website" robots="index,follow" title="ホーム" description="" image_url="" url="">
      <div className="container">
        <h1 className="title">Let's use <span className="site-logo">HTML Editor</span>!</h1>
        <p className="description">
            Let's change text to HTML.
        	<code>&lt;h1&gt;HTML Editor&lt;/h1&gt;</code>
        </p>

		<div className="editor-topbar">
			<div className="editor-topbar__item"><i className="fas fa-heading" /></div>
		</div>

		<form>
			<textarea />
		</form>
      </div>
    </Layout>
  )
}

export default CreatePage;