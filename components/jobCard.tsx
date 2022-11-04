

// @ts-ignore
const JobCard = ({job}) => {

    return(
        <div
            key={job.key}
            className='flex rounded-lg shadow-md w-3/4 bg-white px-4 py-6 hover:scale-105 duration-75'
        >
            <img className='shrink-0 h-20 w-20 border rounded-full' src={job.pictures[1]}/>
            <div className='flex ml-4'>{job.title}</div>
        </div>
    )

}

export default JobCard;
