import type { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

import NextBreadcrumbs from '../components/breadcrumbs'
import PageTitle from '../components/pagetitle'
import ContainerSmall from '../components/containersmall'

const TextSection = () => (
  <ContainerSmall className="space-y-4 pt-12 pb-20">
    <p>
      <strong>We believe</strong> the Bible to be the inspired, the only
      infallible, and authoritative Word of God. (&lsquo;All Scripture is given
      by inspiration of God, and is profitable for doctrine, for reproof, for
      correction, for instruction in righteousness.&lsquo; – 2 Timothy 3:16)
    </p>
    <p>
      <strong>We believe</strong> there is one God (Isaiah 45:5; Exodus 20:1-5),
      eternally existent in three persons (1 John 5:7): Father, Son, and Holy
      Spirit. (&lsquo;Go ye therefore, and teach all nations, baptizing them in
      the name of the Father, and of the Son, and of the Holy Ghost.&lsquo; –
      Matthew 28:19)
    </p>
    <p>
      <strong>We believe</strong> in the deity of our Lord, His virgin birth,
      His sinless life, His miracles, His atoning death through His shed blood,
      His bodily resurrection, His ascension to the right hand of the Father,
      and His personal return in power and glory. (&lsquo;Which also said, Ye
      men of Galilee, why stand ye gazing up into heaven? this same Jesus, which
      is taken up from you into heaven, shall so come in like manner as ye have
      seen him go into heaven.&lsquo; Acts 1:11; also see John 10:33, Matthew
      1:23, Hebrews 4:15, John 2:11, 1 Corinthians 15:3, John 11:25, and Mark
      16:19)
    </p>
    <p>
      <strong>We believe</strong> that salvation can be neither deserved nor
      earned, but is the free gift of God given to those who accept it by faith.
      (&lsquo;For by grace are ye saved through faith; and that not of
      yourselves: it is the gift of God: Not of works, lest any man should
      boast. For we are his workmanship, created in Christ Jesus unto good
      works, which God hath before ordained that we should walk in them.&lsquo;
      – Ephesians 2:8-10; also see John 3:16, John 5:24, Romans 5:8-9, and Titus
      3:5).
    </p>
    <p>
      <strong>We believe</strong> in the resurrection of both the saved and the
      lost – they that are saved unto the resurrection of life and they that are
      lost unto the resurrection of damnation. (&lsquo;Marvel not at this: for
      the hour is coming, in the which all that are in the graves shall hear his
      voice, And shall come forth; they that have done good, unto the
      resurrection of life; and they that have done evil, unto the resurrection
      of damnation.&lsquo; – John 5:28-29)
    </p>
    <p>
      <strong>We believe</strong> in the spiritual unity of believers in our
      Lord Jesus Christ. (&lsquo;There is one body, and one Spirit, even as ye
      are called in one hope of your calling; One Lord, one faith, one baptism,
      One God and Father of all, who is above all, and through all, and in you
      all.&lsquo; – Ephesians 4:4-6)
    </p>
    <p>
      <strong>We believe</strong> in the present ministry of the Holy Spirit by
      indwelling the Christian, enabling him/her to live a godly life.
      (&lsquo;For whom he did foreknow, he also did predestinate to be conformed
      to the image of his Son, that he might be the firstborn among many
      brethren.&lsquo; – Romans 8:29) We believe that the sign gifts (prophecy,
      healing, and tongues) ceased when the canon of Scripture was complete (1
      Corinthians 13:8-10).
    </p>
    <p>
      <strong>We believe</strong> that God created the universe in six literal,
      24-hour periods. We reject evolution, the Gap Theory, the Day-Age Theory,
      and Theistic evolution as unscriptural theories of origin. (Genesis 1-2;
      Exodus 20:11)
    </p>
    <p>
      <strong>We believe</strong> children are a heritage from the Lord, and
      they are to be subject to their parents and obedient at all times. Parents
      are responsible for teaching their children spiritual and moral values and
      leading them, through consistent lifestyle example and appropriate
      discipline, including Scriptural corporal correction. (Psalm 127:3-5,
      Ephesians 6:1-4)
    </p>
  </ContainerSmall>
)

const Page: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Statement of Faith - Augusta Christian Academy</title>
      <meta
        name="description"
        content="Augusta Christian Academy statement of faith"
      />
    </Head>
    <PageTitle text="Statement of Faith" />
    <NextBreadcrumbs />
    <TextSection />
  </>
)

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
