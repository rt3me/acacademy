import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import NextBreadcrumbs from '../components/breadcrumbs'
import PageTitle from '../components/pagetitle'
import ContactForm from '../components/contactform'

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Contact Us - Augusta Christian Academy</title>
      <meta
        name="description"
        content="Get in contact with Augusta Christian Academy"
      />
    </Head>
    <PageTitle text="Contact Us" />
    <NextBreadcrumbs />
    <ContactForm />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
