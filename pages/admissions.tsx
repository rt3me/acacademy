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
    <h2 className="text-3xl font-bold text-gray-600">Enrollment</h2>
    <p>
      Enrollment opened on January 15, 2023. Enrollment forms can be accessed
      directly from the webpage beginning in January 2023.
    </p>
    <p>
      <strong>ENROLLMENT DOCUMENTS</strong>
      <br />
      <a href="/downloads/InfoLetter.pdf">Download Information Letter</a>
      <br />
      <a href="/downloads/TuitionAndFees.pdf">Download Tuition and Fees</a>
      <br />
      <a href="/downloads/StatementOfFaith.pdf">Download Statement of Faith</a>
      <br />
      <a href="/downloads/FamilyCalendar2324.pdf">
        Download 2023-2024 Family Calendar
      </a>
      <br />
      <a href="/downloads/FAQ.pdf">Download FAQ</a>
    </p>
    <h2 className="text-3xl font-bold text-gray-600">Tuition</h2>
    <p>
      Affording a private education can be intimidating, but not impossible. Our
      goal at ACA is to minimize barriers so that all students may have access
      to a Christian Education.
    </p>
    <p>
      At Augusta Christian Academy, we make every effort to increase
      accessibility through Variable Tuition Rates. We encourage all families
      regardless of their financial status to consider applying for financial
      aid.
    </p>
    <p>
      We understand that as a parent/guardian, you want the best education
      possible for your child, and you want to ensure that the school is a good
      fit for your family. Christian school can uniquely prepare your child for
      more than just college and career — it will also prepare his/her heart and
      mind for life’s challenges and celebrations.
    </p>
    <br />
    <Button href="#variabletuitionrates" color="blue" classNameParam="mb-20">
      Variable Tuition Rates
    </Button>
    <br />
    <br />
    <p>
      <strong>WHAT IS VARIABLE TUITION?</strong>
    </p>
    <p>
      Variable Tuition is a means of helping as many families as possible in
      Augusta County and surrounding areas afford Augusta Christian Academy. We
      know often times, the biggest barrier in giving your child the best
      education possible is finances, therefore the Variable Tuition system was
      designed to create a clear, impartial, and transparent process for
      determining a family’s financial aid eligibility.
    </p>
    <p>
      After completing the financial aid application process, we’ll be able to
      determine your family’s actual tuition costs. We anticipate that many
      families will be pleasantly surprised to find out that an ACA education
      really is affordable.
    </p>
    <p>
      Families must submit an application for enrollment before applying for
      Variable Tuition.
    </p>
    <br />
    <p id="variabletuitionrates">
      <strong>TUITION RATES 2023-2024</strong>
      <br />
      <span>Swipe left and right on phones</span>
    </p>
    <div style={{ overflowX: 'auto' }}>
      <table className="table-auto border-collapse bg-white text-center shadow-lg">
        <thead>
          <tr>
            <th
              colSpan={4}
              className="border bg-blue-100 px-8 py-4 text-left text-2xl md:text-center"
            >
              PRESCHOOL
            </th>
          </tr>
          <tr>
            <th className="border bg-gray-100 px-8 py-4">Classes</th>
            <th className="border bg-gray-100 px-8 py-4">
              2 Day
              <br />
              <span className="text-xs">PK3</span>
            </th>
            <th className="border bg-gray-100 px-8 py-4">
              3 Day
              <br />
              <span className="text-xs">PK3</span>
            </th>
            <th className="border bg-gray-100 px-8 py-4">
              5 Day
              <br />
              <span className="text-xs">PK3, PK4, PK5</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-8 py-4">
              Half Day
              <br />
              <span className="text-xs">8:30am-12:00pm</span>
            </td>
            <td className="border px-8 py-4">$768-$1920</td>
            <td className="border px-8 py-4">$1028-$2571</td>
            <td className="border px-8 py-4">$1350-$3376</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">
              Full Day
              <br />
              <span className="text-xs">8:30am-3:00pm</span>
            </td>
            <td className="border px-8 py-4">$1194-$2985</td>
            <td className="border px-8 py-4">$1978-$3597</td>
            <td className="border px-8 py-4">$1898-$4745</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>* PK3: 3-year-old Class, PK4: 4-year-old Class, PK5: 5-year-old Class</p>
    <p>* Payment options include one payment; 10 month cycle; 12 month cycle</p>
    <br />
    <div style={{ overflowX: 'auto' }}>
      <table className="table-auto border-collapse bg-white text-center shadow-lg">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="border bg-blue-100 px-8 py-4 text-left text-2xl md:text-center"
            >
              KINDERGARTEN-8TH GRADE
            </th>
          </tr>
          <tr>
            <th className="border bg-gray-100 px-8 py-4">Classes</th>
            <th className="border bg-gray-100 px-8 py-4">Grade Level</th>
            <th className="border bg-gray-100 px-8 py-4">Variable Tuition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-8 py-4">
              Elementary Program
              <br />
              <span className="text-xs">8:15am-3:15pm</span>
            </td>
            <td className="border px-8 py-4">Kindergarten-4th Grade</td>
            <td className="border px-8 py-4">$2592-$6480</td>
          </tr>
          <tr>
            <td className="border px-8 py-4">
              Middle Program
              <br />
              <span className="text-xs">8:15am-3:15pm</span>
            </td>
            <td className="border px-8 py-4">5th Grade-8th Grade</td>
            <td className="border px-8 py-4">$2760-$6900</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>* Payment options include one payment; 10 month cycle; 12 month cycle</p>
  </ContainerSmall>
)

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Admissions - Augusta Christian Academy</title>
      <meta
        name="description"
        content="Augusta Christian Academy admissions information"
      />
    </Head>
    <PageTitle text="Admissions" />
    <NextBreadcrumbs />
    <TextSection />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
