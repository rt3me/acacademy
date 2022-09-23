import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import CallToAction from '../components/calltoaction'
import Faqs from '../components/faqs'
import Hero from '../components/hero'
import Pricing from '../components/pricing'
import PrimaryFeatures from '../components/primaryfeatures'
import SecondaryFeatures from '../components/secondaryfeatures'
import Testimonials from '../components/testimonials'

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>TaxPal - Accounting made simple for small businesses</title>
      <meta
        name="description"
        content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
      />
    </Head>
    <Hero />
    <PrimaryFeatures />
    <SecondaryFeatures />
    <CallToAction />
    <Testimonials />
    <Pricing />
    <Faqs />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
