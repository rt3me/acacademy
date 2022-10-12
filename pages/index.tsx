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
      <title>
        Augusta Christian Academy - in the Shenandoah Valley, Virginia
      </title>
      <meta
        name="description"
        content="Augusta Christian Academy is a Christian school in Fishersville in the Shenandoah Valley area of Virginia"
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
