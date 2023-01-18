import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import NextBreadcrumbs from '../components/breadcrumbs'
import PageTitle from '../components/pagetitle'
import ContainerSmall from '../components/containersmall'
import Button from '../components/button'

const TextSection = () => (
  <ContainerSmall className="space-y-4 pt-12 pb-20">
    <h2 className="text-3xl font-bold text-gray-600">
      Current Openings and Job Fair
    </h2>
    <p>
      Augusta Christian Academy is holding a job fair. Get more information a
      sign up for an interview here:{' '}
      <a href="https://www.signupgenius.com/go/10c094eabaa2ea2fcc70-acajob">
        https://www.signupgenius.com/go/10c094eabaa2ea2fcc70-acajob
      </a>
      .
    </p>
    <Button
      href="https://www.signupgenius.com/go/10c094eabaa2ea2fcc70-acajob"
      color="blue"
      classNameParam=""
    >
      Job Fair
    </Button>
    <Button
      href="https://form.jotform.com/222835656829065"
      color="blue"
      classNameParam=""
    >
      Apply Now
    </Button>
  </ContainerSmall>
)

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Employment - Augusta Christian Academy</title>
      <meta
        name="description"
        content="Employment opportunities at Augusta Christian Academy"
      />
    </Head>
    <PageTitle text="Employment" />
    <NextBreadcrumbs />
    <TextSection />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
