import JobCard from "../components/jobCard";
import Link from "next/link";
const JobList = ({jobs}) => {

    return (
        <div className='flex flex-col m-auto justify-center w-11/12 md:w-3/4'>
            {jobs.map((job) => (
                <Link key={job.id} href={`/jobDetails/${job.id}`} className='mb-2'>
                    <JobCard
                        key={job.id}
                        job={job}
                    />
                </Link>

            ))}
        </div>
    )
}

export default JobList;
