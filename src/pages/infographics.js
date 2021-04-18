import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const InfographicsPage = () => (
  <Layout>
    <main>
      <Helmet title={`Infographics | ${config.siteTitle}`} />
      <h1>Infographics</h1>
      <p>To be confirmed</p>
    </main>
  </Layout>
)
export default InfographicsPage
