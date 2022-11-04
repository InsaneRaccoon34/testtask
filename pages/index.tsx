import JobList from "./jobList";
import Head from "next/head";
import {GetStaticProps} from "next";

const API = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data"
const TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(API, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    })
    const data = await res.json();
    return{
        props: { jobs: data }
    }
}


// @ts-ignore
const Home = ( {jobs} ) => {

    return(
        <div>
            <Head>
                <title>Jobs</title>
            </Head>
            <div className='py-7'>
            <JobList jobs={jobs}/>
            </div>

        </div>
    )
}

export default Home;
