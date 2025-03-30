"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects2 from "./components/Projects2";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import   {Projects}  from '@/app/types/projects';


const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
export default function Home() {

  interface ProjectDetailsState {
    state: boolean;
    project: Projects ;
  }
  
  const [openModal, setOpenModal] = useState<ProjectDetailsState>({ state: false, project: null });
  return (
    <>
      <HeroSection />
      <Wrapper>
        <Skills />
        <Experience />
      </Wrapper>
      <Projects2 openModal={openModal} setOpenModal={setOpenModal} />
      <Wrapper>
        <Education />
        <Contact />
      </Wrapper>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  );
}
