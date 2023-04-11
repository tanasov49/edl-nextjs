import SectionAbout from "@/components/Sections/SectionAbout/SectionAbout"
import SectionProducts from "@/components/Sections/SectionProducts/SectionProducts"
import AsideIndexPage from "@/components/UI/AsideIndexPage/AsideIndexPage"
import Head from "next/head"


export default function Home() {
  return (
    <>
    <Head>
      <title>edl || we make a joy to use</title>
      <meta name="title" content="design agency" />
    </Head>
    <AsideIndexPage />
    <SectionProducts />
    <SectionAbout />
    </>
  )
}
