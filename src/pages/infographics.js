import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const InfographicsPage = () => (
  <Layout>
    <main>
      <Helmet title={`Infographic | ${config.siteTitle}`} />
      <h1>Infographic</h1>
      <p>To be confirmed</p>
    </main>
  </Layout>
)
export default InfographicsPage
