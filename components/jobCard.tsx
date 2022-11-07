

// @ts-ignore
const JobCard = ({job}) => {

    return(
        <div key={job.key} className='flex mb-2 rounded-lg shadow-md w-3/4 bg-white px-4 py-6 hover:scale-105 duration-75'>
            <div className='flex flex-1'>
                <img className='flex shrink-0 h-20 w-20 border rounded-full' src={job.pictures[1]} alt='╰(*°▽°*)╯'/>
                <div className='flex flex-col ml-4'>
                   <div className='font-bold'>{job.title}</div>
                    <span className='mt-2 font-normal text-slate-500'>{job.name}</span>
                   {/*change address to location from lib (mb)*/}
                    <span className='mt-2 font-normal text-slate-500'>{job.address}</span>
                </div>
            </div>
            <div className='flex items-end'>
                <div>{job.createdAt}</div>
            </div>
        </div>
    )

}

export default JobCard;
