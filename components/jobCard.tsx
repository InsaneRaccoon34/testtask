import moment from "moment";


// @ts-ignore
const JobCard = ({job}) => {

    const createdDate = moment.duration(job.createdAt, 'days').humanize()
    return(
        <div key={job.key}
             className='flex px-4 py-6 rounded-lg shadow-md
             bg-slate-200 md:bg-white
             hover:scale-105 duration-75'
        >
            <div className='flex flex-1'>
                <img className='shrink-0 h-20 w-20 border rounded-full' src={job.pictures[1]} alt='╰(*°▽°*)╯'/>
                <div className='flex flex-col ml-4'>
                   <div className='font-bold'>{job.title}</div>
                    <span className='mt-2 font-normal text-slate-500'>{job.name}</span>
                   {/*change address to location from lib (mb)*/}
                    <span className='mt-2 font-normal text-slate-500'>{job.address}</span>
                </div>
            </div>
            <div className='flex items-end'>
                <div>{createdDate}</div>
            </div>
        </div>
    )

}

export default JobCard;
