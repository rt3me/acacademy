import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import CallToAction from '../components/calltoaction'
import Hero from '../components/hero'

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
    <CallToAction
      href="/admissions"
      buttonText="Admissions Information"
      text="Today is the day to find out more about admissions and tuition at
            Augusta Christian Academy."
      heading="Get Started Today"
    />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
