import WorkItem from "./WorkItem.js";

import { data } from "../data/data.js";

const Work = () => {

    const project = data;

  return (
    <div data-name='work' className="bg-[#0a192f] w-full md:h-screen text-gray-300">
        {/* Container */}
        <div className="xl:max-w-[1000px] lg:max-w-[900px] mx-auto p-4 flex flex-col justify-center h-full w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className="py-6">// Check out some of my recent work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                {project.map((item, index) => (
                    <WorkItem index={index} item={item}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Work