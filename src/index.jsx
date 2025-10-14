import React from 'react'
import { Club } from './pages/Homepage/Club';
import {Homee} from './pages/Homepage/Homee';
import {Team} from './pages/Homepage/Team';
import {Event} from './pages/Homepage/Event';
import {Joinus} from './pages/Homepage/JoinUs';
import {Footermain} from './pages/Homepage/FooterMain';

const Index = () => {
  return (
    <>
    <div>Index</div>
    
    <Homee />
    <Club />
    <Team />
    <Event />
    <Joinus/>
    <Footermain/>
    </>
    
    
  )
}

export default Index;
