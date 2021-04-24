import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import picture from "../../static/assets/final_infographic.png"

const InfographicsPage = () => (
  <Layout>
    <main>
      <Helmet title={`Infographic | ${config.siteTitle}`} />
      <h1>Infographic: Research process and results</h1>
      <img src={picture} alt="infographic" />
    </main>
  </Layout>
)
export default InfographicsPage
