'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import StoreIcon from '@mui/icons-material/Store';
import TrainIcon from '@mui/icons-material/Train';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import Link from 'next/link';
import TransportMap from './TransportMap';
import TramStopAndBusStop from './TramStopAndBusStop';




const cardText = `For convenient and budget-friendly transportation in Melbourne, public transit stands
out as the optimal choice due to its affordability, accessibility, and frequent service. To ensure a smooth experience,
let's provide you with a head start and introduce the PTV system.`

const whtsPtv = (
  <>
    Public Transport Victoria (PTV) serves as Melbourne&apos;s comprehensive transportation system,
    encompassing an extensive network of trains, trams, and buses that span the entire Victoria region. PTV stands
    as your top choice for affordable, convenient, and frequent transportation, ensuring accessibility to your desired
    destinations.
  </>)

const myKi = `Before you embark on your journey, make sure to acquire a Myki card. Below are some of the places where you can get it.`

const carText1 = (
  <>
    If you are planning a road trip in Melbourne, you will find a range of convenient ride-sharing apps
    like Uber, Ola and Didi available for download pn both the Apple Store and Google Play Store
  </>
)
const carText2 = (
  <> In Melbourne you also have the option to rent cars from various car rental companies. It is important
    to note that if you are using an overseas driver&apos;s license, you can only do so for a maximum of six months from your arrival date.
    After this period, you will be required to convert to a Victorian driver&apos;s license. For further details, {' '}<a
      href="https://www.vicroads.vic.gov.au/licences/new-to-victoria/convert-your-overseas-licence"
      className="underline hover:text-blue-500 cursor-pointer"
      target="_blank"
    >
      click here
    </a>
  </>
)

const whtsPtvApp = (
  <> The PTV app offers user-friendly functionality and caters to all your transportation requirements.
    With this app, you can instantly recharge your Myki card, access real-time travel updates, protect your Myki
    balance, and much more. The PTV app streamlines journey planning and simplifies Myki management, ensuring a seamless experience.

  </>
)

const landlord = (
  <div style={{ marginLeft: '20px' }}>
    <Image
      src="/images/accom/landlord.png"
      alt="Descriptive Alt Text"
      width={300}
      height={200}
      objectFit='contain'
    />
  </div>
);

const PersonImageright = (
  <div style={{ marginLeft: '20px' }}>
    <Image
      src="/images/person-modified.png"
      alt="Descriptive Alt Text"
      width={300}
      height={200}
      objectFit="contain"
    />
  </div>
);

export default function TransportationStepper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (

    <div id="transport-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='stepper_heading' style={{ marginBottom: '20px' }}>
        Transport
      </div>
      <div style={{
        width: '80%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
      }}>
        <p className='textBody' style={{ lineHeight: '1.5' }}>
          {cardText}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}>
          <Image
            src="/images/trans/train.jpg"
            alt="Service Provider 1"
            width={300}
            height={200}
            objectFit='contain'
          />
        </div>
        <TramStopAndBusStop />
      </div>

      {/* WHAT IS PTV */}
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#f3f2ef', width: '100vw', marginTop: '20px' }}>
        <div className='stepper_subheading1' >
          What is PTV?
        </div>
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {whtsPtv}
          </div>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
          <TransportMap />
        </div> */}
      </div>

      {/* WHERE TO GET A MYKI */}
      <div id="transport-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', width: "100vw" }}>
        <div className='stepper_subheading1' style={{ marginTop: '20px' }}>
          Where to get a Myki card
        </div>
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {myKi}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ maxWidth: '200px', margin: '0 30px', textAlign: 'center' }} className="transition duration-500 transform hover:scale-105">
            <StoreIcon style={{ fontSize: 60 }} />
            <p className='textBody' style={{ marginTop: '10px' }}>Convenience store such as 7-eleven</p>
          </div>
          <div style={{ maxWidth: '200px', margin: '0 30px', textAlign: 'center' }} className="transition duration-500 transform hover:scale-105">
            <TrainIcon style={{ fontSize: 60 }} />
            <p className='textBody' style={{ marginTop: '10px' }}>Selected train stations</p>
          </div>
          <div style={{ maxWidth: '200px', margin: '0 30px', textAlign: 'center' }} className="transition duration-500 transform hover:scale-105">
            <AddToHomeScreenIcon style={{ fontSize: 60 }} />
            <p className='textBody' style={{ marginTop: '10px' }}>The Myki app</p>
          </div>
        </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '80px', maxWidth: '1050px' }}>
  <h1 className='stepper_subhead' style={{ margin: '0' }}>Myki student concession card</h1>
  <p style={{ fontSize: '20px' }}>
    As an international student, you can benefit from half-price fares by applying for a
    Myki concession card. To check your eligibility with your institution, {' '}
    <a
      href="https://www.ptv.vic.gov.au/tickets/myki/concessions-and-free-travel/children-and-students/tertiary-students/"
      className="underline hover:text-blue-500 cursor-pointer"
      target="_blank"
    >
      click here
    </a>.
  </p>

  <div className='textBody' style={{ alignSelf: 'flex-start', marginTop: '20px' }}>
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <p>Concession cards are offered for 3 durations: </p>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
        <p>1. 90 day pass at $270</p>
        <p>2. 180 day pass for $540</p>
        <p>3. Yearly pass at $975</p>
      </div>
    </div>

    <div style={{ textAlign: 'left', padding: '20px', marginTop: '20px' }}>
      <p>To apply:</p>
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
        <p>1. Check if your institution is part of the international student travel pass program</p>
        <p>2. Talk to a university representative to get a student travel pass code</p>
        <p>3. Register your details on the {' '}
          <a
            href="https://www.ptv.vic.gov.au/tickets/myki/concessions-and-free-travel/children-and-students/international-students/"
            className="underline hover:text-blue-500 cursor-pointer"
            target="_blank"
          >
            International Student Travel Pass
          </a> website
        </p>
        <p>4. Buy the international student travel pass</p>
      </div>
    </div>
  </div>
</div>




        {/* WHAT IS PTV APP */}
        <div style={{ backgroundColor: '#f3f2ef', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#f3f2ef', width: '100vw', marginTop: '20px' }}>
        <div className='stepper_subheading1' >
          What is PTV app?
        </div>
        
        
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {whtsPtvApp}
          </div>
        </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <a href="https://apps.apple.com/au/app/public-transport-victoria-app/id318696180" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '300px', margin: '0 10px' }}>
            <Image
              src="/images/trans/apple.png"
              alt="Scape"
              width={850}
              height={200}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=au.gov.vic.ptv&hl=en_AU&gl=US&pli=1" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '300px', margin: '0 10px' }}>
            <Image
              src="/images/trans/google.png"
              alt="uniLodge"
              width={200}
              height={200}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
        </div>
        </div>





        {/* TRAVEL BY CAR SECTION */}
        <div style={{
          width: '80%',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '15px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          marginTop: '20px'
        }}>

          <div className='stepper_subheading1' style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Travelling by a car
          </div>

          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {carText1}
            </div>
          </div>

          <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {carText2}
            </div>
            {landlord}
          </div>
          {/* Button section */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <button
              onClick={handleButtonClick}
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              style={{
                textTransform: 'none',
                backgroundImage: 'linear-gradient(to right, #ef5c72, #e9bc38)',
                border: 'none',
                color: 'white',
              }}
            >
              FINISH
            </button>
          </div>

          {/* Modal section */}
          {isModalOpen && (
            <dialog id="my_modal_2" className="modal" open>
              <form method="dialog" className="modal-box">
                <h3 className='textBodyBold' style={{marginBottom: '10px'}}>Congratulations on completing the step-by-step guide! <br /></h3>
                <h3 className='textBody'>You now have the information for all the essential resources you need
                  to make a smooth transition and settle down in Melbourne. </h3>
                <div className="modal-action" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Link href="/events">
                    <button
                      type="button"
                      className="btn"
                      onClick={closeModal}
                      style={{
                        textTransform: 'none',
                        backgroundImage: 'linear-gradient(to right, #ef5c72, #e9bc38)',
                        border: 'none',
                        color: 'white',
                      }}
                    >
                      Explore Events in Melbourne
                    </button>
                  </Link>
                </div>

              </form>
            </dialog>
          )}












        </div>
      </div>
    </div>
  )
}
