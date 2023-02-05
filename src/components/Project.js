import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);

  useHoverEffect(projectRightRef, project.image1, project.image2);

  return (
    <div className='project grid grid-cols-5'>
      <div className='project-left col-span-3 flex flex-col gap-10'>
        <span className='text-9xl text-white/20'>
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className='text-5xl leading-relaxed text-cyan-400 uppercase'>
          {project.title}
        </h3>
        <p className='text-white/75'>{project.description}</p>
        <span className='text-cyan-400 flex flex-wrap gap-5'>
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
        <div className='project-btn flex flex-wrap gap-10'>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300'
            href={project.liveLink}
            target='_blank'
            rel='noreferrer'
          >
            Live Site
          </a>
          <a
            className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300'
            href={project.frontEndLink}
            target='_blank'
            rel='noreferrer'
          >
            Front-End Code
          </a>
          {project.backEndLink && (
            <a
              className='uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-300'
              href={project.backEndLink}
              target='_blank'
              rel='noreferrer'
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>
      <div
        className='project-right col-span-2 justify-self-end'
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
