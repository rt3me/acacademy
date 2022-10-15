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
    <p>
      We are excited to share with you the news of Augusta Christian Academy
      that will be opening in the Fishersville area in August 2023. Augusta
      Christian is a community Christian school beginning with age three
      pre-school through 8th grade. We are looking forward to seeing how God
      will grow this ministry.
    </p>
    <p>
      Augusta Christian is a ministry of Crossroads Baptist Church; however, we
      view this outreach ministry as an opportunity to serve and support both
      Christian families from a variety of local churches, as well as a mission
      opportunity to reach our un-churched community members.
    </p>
    <p>
      At Augusta Christian, we look forward to establishing a solid biblical
      foundation for our students while creating a learning environment that
      supports not only the academic needs of students but creates a supportive
      nurturing environment to meet both social and emotional needs. We will
      strive to support communication skills and problem-solving skills of our
      students. We believe in creating a highly engaging environment where
      students will feel challenged, but also successful. Where children are
      held to high expectations, but supported to reach their maximum potential.
      All of this will be done with our primary focus being to share the love of
      Jesus and working to lead children to Christ.
    </p>
    <p>What a great way to impact our community!</p>
    <p>
      Continue to follow our website and Facebook page for continued updates
      about our progress as we prepare for opening.
    </p>
    <p>
      For additional information or to be added to our mailing list, please use
      this link:
    </p>
    <br />
    <Button
      href="https://form.jotform.com/222765635435057"
      color="blue"
      classNameParam=""
    >
      Community Interest Survey
    </Button>
  </ContainerSmall>
)

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>About Us - Augusta Christian Academy</title>
      <meta
        name="description"
        content="Find out more about Augusta Christian Academy"
      />
    </Head>
    <PageTitle text="About" />
    <NextBreadcrumbs />
    <TextSection />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
