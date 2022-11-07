import { Key } from "react";
import JobCard from "../components/jobCard";

// @ts-ignore
const JobList = ({jobs}) => {

    console.log(jobs)
    return (
        <div className='flex flex-col items-center'>
            {jobs.map((job: { id: Key | null | undefined; }) => (
                <JobCard
                    key={job.id}
                    job={job}
                />
            ))}
        </div>
    )
}

export default JobList;
