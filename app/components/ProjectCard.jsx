import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

function ProjectCard({ imgUrl, title, description, projectUrl, toolsUsed }) {
  return (
    <div
      className='rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-(--sky-500)/10 backdrop-blur'
      id='#projects'
    >
      {/* card image */}
      <div
        className='relative h-52 md:h-72 rounded-t-2xl group'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* card overlay and link */}
        <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-black/60 rounded-t-2xl'>
          <Link
            href={projectUrl}
            className='flex items-center justify-center border-2 border-white rounded-full h-14 w-14 transition-colors duration-300 hover:bg-white/20'
          >
            <FiExternalLink className='w-6 h-6 text-white' />
          </Link>
        </div>
      </div>

      {/* card content */}
      <div className='rounded-b-2xl px-4 py-4'>
        <h4 className='mb-2 text-xl font-semibold'>
          <Link href={projectUrl} className='hover:underline hover:text-(--violet-700)'>
            {title}
          </Link>
        </h4>
        <p className='mb-3 text-sm opacity-90'>{description}</p>

        {/* tools list as tags */}
        <div className='flex flex-wrap gap-2 mt-3'>
          {toolsUsed.map((tool, i) => (
            <span
              key={i}
              className='px-3 py-1 font-medium rounded-full text-xs capitalize italic tracking-wide bg-violet-600/10 text-violet-700 border border-violet-700/20 backdrop-blur-sm'
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
