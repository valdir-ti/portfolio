type WorkItemProps = {
    item: {
        image: string
        name: string
        github: string
        live: string
    }
}

const WorkItem = ({item}: WorkItemProps) => {
  return (
    <div style={{ backgroundImage: `url(${item.image})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div">
        {/* Hover Effect */}
        <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
                {item.name}
            </span>
            <div className='pt-8 text-center'>
                <a href={item.live} target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href={item.github} target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default WorkItem