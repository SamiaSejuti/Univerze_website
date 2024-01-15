import React from 'react'
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';
import Link from 'next/link';
export default function PhoneStepper() {

  const chatText = `Picking a network provider is your passport to stay connected
  when you arrive in Melbourne. We'll walk you through the reputable options.`

  const chooseText = `Upon arrival, the first thing you will need is a new sim card. See below
   to discover your options and let's make sure you are connected.`

  const docText = `Alright Champ! We're almost there. Setting up a sim card requires 100 points
  of ID. See below for the documents that you need.`

  const sec1Text = `Primary identification = 70 points`
  const sec2Text = `Secondary identification = 30 points`
  const PersonImage = (
    <div style={{ marginLeft: '20px' }}>
      <Image
        src="/images/person.png"
        alt="Descriptive Alt Text"
        width={300}
        height={200}
        objectFit='contain'
      />
    </div>
  );


  return (
    <div id="service-provider-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='stepper_heading'style={{ marginTop: '20px', marginBottom: '20px' }}>Network Provider</div>
        <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {chatText}
          </div>
          {PersonImage}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f2ef', width: '100vw' }}>
        <div className='stepper_subheading1' style={{ marginTop: '20px', marginBottom: '20px' }}>Choosing a network provider</div>
        <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {chooseText}
          </div>
          {PersonImage}
        </div>
        <div className='stepper_subhead' style={{ marginTop: '20px', marginBottom: '20px' }}>Major service providers</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <a href="https://shorturl.at/nEIQ1" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/telstra.png"
              alt="Service Provider 1"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://www.optus.com.au/mobile/plans/shop" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/optus.png"
              alt="Service Provider 2"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://www.vodafone.com.au/students" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/vodaphn.png"
              alt="Service Provider 3"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
        </div>
        <div className='stepper_subhead' style={{ marginTop: '100px', marginBottom: '20px' }}>Other service providers</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <a href="https://www.amaysim.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/amay.png"
              alt="Other Service Provider 1"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://rb.gy/pnfe3" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/agl.png"
              alt="Other Service Provider 2"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://www.tpg.com.au/mobile" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/tpg.png"
              alt="Other Service Provider 3"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <a href="https://www.dodo.com/mobile/sim-only-plans" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/dodo.png"
              alt="Other Service Provider 4"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://www.belong.com.au/go/mobile" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/sim/belong.png"
              alt="Other Service Provider 5"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
        </div>
      </div>
      <div className='stepper_subheading1' style={{ marginTop: '20px', marginBottom: '20px' }}>Documents required</div>
      <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
          {docText}
        </div>
        {PersonImage}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

        {/* Section 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginBottom: '-40px' }}>
            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4">
              1
            </div>
            <h2 style={{fontSize:'20px'}}>{sec1Text}</h2>
          </div>
          <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/sim/pass.jpeg"
              alt="Section 1 Image"
              width={500}
              height={200}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </div>
          <div style={{ fontSize:'20px', marginTop: '-40px' }}>
            Passport with valid visa grant
          </div>
        </div>

        {/* Section 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%' }}>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', marginBottom: '-40px' }}>
            <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4">
              2
            </div>
            <h2 style={{fontSize:'20px'}}>{sec2Text}</h2>
          </div>
          <div style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/images/sim/card.jpeg"
              alt="Section 2 Image"
              width={500}
              height={200}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </div>
          <div style={{ fontSize:'20px', marginTop: '-40px' }}>
            Valid credit or debit card
          </div>
        </div>
      </div>
      
    </div>
  )
}
