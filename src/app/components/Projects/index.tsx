// import React from 'react'
// import { useState } from 'react'
// import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
// import ProjectCard from '../Cards/ProjectCards'
// import { projects } from '../../data/constants'

// interface ProjectsProps {
//   openModal: boolean;
//   setOpenModal: (openModal: boolean) => void;
// }

// const Projects: React.FC<ProjectsProps> = ({openModal,setOpenModal}) => {
//   const [toggle, setToggle] = useState('all');
//   return (
//     <Container id="projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>
//           Here are some of my projects i worked upon using various Techstacks individually and alongside different teams.
//         </Desc>
//         <ToggleButtonGroup >
//           {toggle === 'all' ?
//             <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//             :
//             <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'web app' ?
//             <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP&apos;S</ToggleButton>
//             :
//             <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP&apos;S</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'android app' ?
//             <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP&apos;S</ToggleButton>
//             :
//             <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP&apos;S</ToggleButton>
//           }
//           <Divider />
//           {toggle === 'machine learning' ?
//             <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//             :
//             <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
//           }
//         </ToggleButtonGroup>
//         <CardContainer>
//           {toggle === 'all' && projects
//             .map((project) => (
//               <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
//             ))}
//           {projects
//             .filter((item) => item.category == toggle)
//             .map((project) => (
//               <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Projects


import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';
import type { Projects } from '../../types/projects';


// interface Project {
//   id: string;
//   title: string;
//   date: string;
//   description: string;
//   image: string;
//   tags: string[];
//   category: string;
//   github: string;
//   webapp?: string;
//   member?: {
//     name: string;
//     img: string;
//     linkedin: string;
//     github: string;
//   } 
// }

// interface ProjectsProps {
//   openModal: boolean;
//   setOpenModal: (openModal: boolean) => void;
// }

interface ProjectsProps {
  openModal: { state: boolean; project: Projects; };
  setOpenModal: (modalState: { state: boolean; project: Projects; }) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState<string>('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Here are some of my projects I worked on using various tech stacks, both individually and with different teams.
        </Desc>
        <ToggleButtonGroup>
          {['all', 'web app', 'android app', 'machine learning'].map((category) => (
            <React.Fragment key={category}>
              <ToggleButton active={toggle === category} onClick={() => setToggle(category)}>
                {category.toUpperCase()}
              </ToggleButton>
              {category !== 'machine learning' && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project) => toggle === 'all' || project.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project}  setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
