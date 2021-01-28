import React from 'react'
import Particles from 'react-tsparticles'
import Header from '../src/Components/Header'
import particlesConfig from '../src/Config/particlesConfig'

const Index = () => {
  return (
    <>
      <Particles options={particlesConfig} />
      <Header />
    </>
  )
}

export default Index
