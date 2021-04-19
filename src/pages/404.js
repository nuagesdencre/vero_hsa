import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/index'
import config from '../../data/SiteConfig'

const NotFoundPage = () => (
  <Layout>
    <main>
      <Helmet title={`404: Not Found | ${config.siteTitle}`} />
      <h1>404 Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... Go back to the home page by clicking on the title at the top left of the screen.</p>
    </main>
  </Layout>
)

export default NotFoundPage
