import JobList from "./jobList";
import Head from "next/head";

export default function Home() {
  return(
      <div>
        <Head>
          <title>Jobs</title>
        </Head>
        <JobList/>
      </div>
  )
}
