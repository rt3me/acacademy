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
    <h2 className="text-3xl font-bold text-gray-600">Current Openings</h2>
    <p>
      <strong>Marketing and Enrollment Coordinator</strong>
      <br />
      <a href="/downloads/MarketingandEnrollmentJobDescription.docx">
        Click for job description
      </a>
    </p>
    <p>
      <strong>Office Manager: Admissions and Payroll</strong>
      <br />
      <a href="/downloads/OfficeManagerJobDescription.docx">
        Click for job description
      </a>
    </p>
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
