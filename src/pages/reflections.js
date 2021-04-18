import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import Reflections from '../components/Reflections'

const ReflectionsPage = () => (
  <Layout>
    <main>
      <Helmet title={`Reflections  | ${config.siteTitle}`} />
      <Reflections />
    </main>
  </Layout>
)

export default ReflectionsPage
