import React, { useState } from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RentalPriceChart from './RentalPriceChart';
import CompareRentBySub from './CompareRentBySub';
import TempAccom from './TempAccom';

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
      objectFit='contain'
    />
  </div>
);

{/* ACCODMODATION TYPES ACCORDION FUNCTION */ }
function BasicAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedUniversity, setSelectedUniversity] = useState(null);
  // const [dropdownVisible, setDropdownVisible] = useState(false);

  const universities = [
    {name: 'Monash University', image: '/images/accom/monash.jpg', url: 'https://www.monash.edu/accommodation/accommodation/on-campus-options'},
    {name: 'Deakin University', image: '/images/accom/deakin.png', url: 'https://www.deakin.edu.au/accommodation  '},
    {name: 'RMIT University', image: '/images/accom/rmit.png', url: 'https://www.rmit.edu.au/students/student-life/accommodation'},
    {name: 'La Trobe University', image: '/images/accom/la_trobe.png', url: 'https://www.latrobe.edu.au/accommodation'},
    {name: 'Swinburne University of Technology', image: '/images/accom/swinburne.png', url: 'https://www.swinburne.edu.au/life-at-swinburne/student-support-services/accommodation/on-campus-accommodation/'},
    {name: 'Australian Catholic University', image: '/images/accom/acu.png', url: 'https://www.acu.edu.au/student-life/student-accommodation/melbourne-accommodation'},
    {name: 'Federation University AUstralia', image: '/images/accom/fua.png', url: 'https://federation.edu.au/about-us/facilities-and-services/commercial-services/fedliving/accommodation-options'},
    {name: 'Victoria University', image: '/images/accom/vic_u.png', url: 'https://www.vu.edu.au/current-students/campus-life/housing-accommodation'},
    {name: 'Unviersity of Melbourne', image: '/images/accom/mel.png', url: ''}
  ];

  const handleUniversity = (url: string) => {
    window.open(url, '_blank');
  };

  // const handleSelect = (name, imgSrc, link) => {
  //   setSelectedUniversity({ name, imgSrc, link });
  //   setDropdownVisible(false);
  // };

  const stdacc = `Student accomodation is a great way to learn the art of sharing your fridge space!
  It is a good place to meet new people and make friends, which is a great head start. Most student accomodations
  offer a flat weekly fee while some accomodations require tenants to pay additional electricity, gas and water fees.`

  const oncampusText = `Most universities offer on-campus student accomodations. Depending on the university
  you are enrolled in, we can offer resources tailored to your specific institution.`

  const privacc = (
    <>
      When it comes to private rental properties in Melbourne, we&apos;re talking spaces bigger than a kangaroo&apos;s pouch.
      <br />
      <br />
      The advantages of these are they are often larger spaces with multiple rooms. However, these require tenants to pay for bills such as electricity, gas, water, and internet.
    </>
  );

  const compare_sub = (
    <>
      When it comes to private rental properties in Melbourne, we&apos;re talking spaces bigger than a kangaroo&apos;s pouch.
      <br />
      <br />
      The advantages of these are they are often larger spaces with multiple rooms. However, these require tenants to pay for bills such as electricity, gas, water, and internet.
    </>
  );

  const compare = `The rental costs significantly impacts students' accomodation choices. Melbourne's diverse suburbs
  offer varrying rental rates. To assist you in finding accomodation that aligns with your budget, refer to the
  visual below, illustrating rental prices accross different councils in Melbourne.`

  return (
    <div style={{ width: '80vw' }}>
      {/* Temporary Rental ACCORDION*/}
      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='stepper_subhead_accordion'>Temporary Rental</Typography>
        </AccordionSummary>
        <AccordionDetails>
          

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
           <TempAccom/>
           </div>


        </AccordionDetails>
      </Accordion>

      {/* STUDENT ACCOMODATION ACCORDION */}
      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='stepper_subhead_accordion'>Student Accomodation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {stdacc}
            </div>
          </div>

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBodyBold' style={{marginBottom: '10px'}}>On-Campus student accommodation</h1>
              <p className='textBody'> {oncampusText}</p>
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
              {universities.map((university, index) => (
                <div key={index} style={{ marginTop: '10px'}}>
                    <Image
                      src={university.image}
                      alt={university.name}
                      key={index}
                      width={100}
                      height={85}
                      // fill={true}
                      objectFit='contain'
                      className="transition duration-500 transform hover:scale-105"
                      style={{ position: 'relative' }}
                      onClick={() => handleUniversity(university.url)}
                    />
                </div>
              ))}
              {/* <div class="dropdown">
                <label
                  tabindex="0"
                  class="btn m-1"
                  onClick={() => setDropdownVisible(!dropdownVisible)}
                >
                  {selectedUniversity ? selectedUniversity.name : 'Select University'} &#9662;
                </label>
                {dropdownVisible && (
                  <ul
                    tabindex="0"
                    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a onClick={() => handleSelect('Monash University', '/images/accom/monash.jpg', 'https://www.monash.edu/')}>Monash University</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelect('Deakin University', '/images/accom/deakin.png', 'https://www.deakin.edu.au/')}>Deakin University</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelect('University of Melbourne', '/images/accom/mel.png', 'https://www.unimelb.edu.au/')}>University of Melbourne</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelect('RMIT University', '/images/accom/rmit.png', 'https://www.rmit.edu.au/')}>RMIT University</a>
                    </li>
                  </ul>
                )}
              </div> */}
              {/* {selectedUniversity && (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <a href={selectedUniversity.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={selectedUniversity.imgSrc}
                      alt={selectedUniversity.name}
                      width={200}
                      height={200}
                      objectFit='contain'
                      style={{ position: 'relative', marginTop: '-40px' }}
                    />
                  </a>
                </div>
              )} */}
            </div>
          </div>

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBodyBold' style={{marginBottom: '10px'}}>Off-Campus student accommodation providers</h1>
              <h1 className='textBody'>Off-campus student accommodation provides college and university students with 
                housing options located near their campus, offering independence and convenience with 
                shared apartments and student-oriented amenities.</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://www.scape.com.au/melbourne/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/scape.png"
                  alt="Scape"
                  width={150}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.unilodge.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/unilodge.png"
                  alt="uniLodge"
                  width={150}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://sha.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/studHousing.png"
                  alt="studHousing"
                  width={150}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://yugo.com/en-gb/global/australia" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/yugo.png"
                  alt="yugo"
                  width={100}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* PRIVATE RENTAL ACCOMODATION ACCORDION */}
      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='stepper_subhead_accordion'>Private Rental Accomodation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {privacc}
            </div>
          </div>

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBody'>Melbourne has a variety of private rental agencies to choose from</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://www.micm.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/micm.png"
                  alt="Scape"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.realestate.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/realEstate.png"
                  alt="uniLodge"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.raywhite.com/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/rayWhite.jpg"
                  alt="studHousing"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://flatmates.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/flatMates.png"
                  alt="yugo"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.domain.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/domain.png"
                  alt="Image 5"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.rent.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '150px', margin: '0 5px' }}>
                <Image
                  src="/images/accom/rent.png"
                  alt="Image 6"
                  width={200}
                  height={100}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* COMPARE RENT BY AREA ACCORDION*/}
      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='stepper_subhead_accordion'>Compare Rent by Area</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f3f2ef', width: '100vw', marginTop: '20px' }}>
          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {compare}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <RentalPriceChart />    
          </div>
          </div>
          
        </AccordionDetails>
      </Accordion>

       {/* COMPARE RENT BY SUBURB ACCORDION
       <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='stepper_subhead_accordion'>Compare Rent by Suburb</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {compare_sub}
            </div>
          </div>

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
           <CompareRentBySub/>
           </div>


        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}

{/* RENTAL AGREEMENTS & BONDS ACCORDION FUNCTION*/ }
function BasicAccordion2() {
  const aboutrent1 = (
    <>
      So you&apos;ve uncovered the perfect nest for yourself!
      <br />
      Now, it&apos;s time to sign the rental agreement. It&apos;s like the sacred bond between you and the landlord,
      where both parties promise to play nice (well, mostly!)
    </>
  );

  const aboutrent2 = (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <p>The rental agreement includes the following:</p>
      <div style={{ marginLeft: '20px' }}>
        <ol style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>1. The amount of rent and how it will be paid</li>
          <li>2. How any increases in rent will be calculated</li>
          <li>3. The length and type of agreement</li>
          <li>4. Amount of bond</li>
          <li>5. Other conditions and rules</li>
          <li>6. Any special terms</li>
        </ol>
      </div>
      <br />
      <p>Just remember, this piece of paper is more important than your favourite late-night snack stash - read it thoroughly!
        It&apos;s your golden ticket to a harmonious rental journey!</p>
    </div>
  );

  const moreDetailed = (
    <>
      It&apos;s vital to know what you&apos;re getting into before you sign on the dotted line. Once you&apos;re locked in,
      surprises may lurk around the corner, and you don&apos;t want any &apos;Oops, I didn&apos;t sign up for that&apos; moments
    </>
  );

  const aboutbonds1 = (
    <>
      As part of signing your rental agreement, you will also have to pay a bond fee to Residential Tenancies
      Bond Authority (RTBA).
      <br />
      <br />
      A bond is a security deposit paid at the start of your tenancy. The bond covers any damages and any
      cost the rental providers may have to pay when you move out.
      <br />
      <br />
      When moving out, ensure thorough checking of the condition report to avoid fee deduction from your bond
      at the end of the lease.
    </>);

  const aboutbonds2 = (<>
    Follow the steps below to lodge your bond
  </>);

  return (
    <div style={{ width: '80vw' }}>

      {/* RENTAL AGREEMENTS ACCORDION */}

      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='stepper_subhead_accordion'>Rental Agreements</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {aboutrent1}
            </div>
          </div>

          <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  <div style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '80px' }} className="chat-bubble">
    {aboutrent2}
  </div>
  {landlord}
</div>


          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBody'>You can read more detailed information about rental agreements form the following sources:</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://www.studymelbourne.vic.gov.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/studymel.png"
                  alt="Scape"
                  width={250}
                  height={200}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.consumer.vic.gov.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/consumer.png"
                  alt="uniLodge"
                  width={250}
                  height={200}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBody'>{moreDetailed}</h1>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* BOND PAYMENT ACCORDION */}
      <Accordion style={{background: 'linear-gradient(to right, #E8F764, #EC9674)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='stepper_subhead_accordion'>Bond Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
            {PersonImageright}
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {aboutbonds1}
            </div>
          </div>

          <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
              {aboutbonds2}
            </div>
            {landlord}
          </div>



          {/* Step 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>1</div>
              <div className='textBody' style={{ marginTop: '20px' }}>Complete the bond lodgement form from RTBA</div>
            </div>
            {/* Step 2 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>2</div>
              <div className='textBody' style={{ marginTop: '20px' }}>Sign the bond form and receive a copy of the bond</div>
            </div>
            {/* Step 3 */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>3</div>
              <div className='textBody' style={{ marginTop: '20px' }}>Lodge your bond along with the payment within 10 business days</div>
            </div>
          </div>

          <div style={{
            width: '98%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            margin: '0 1%'
          }}>
            <div style={{ textAlign: 'left', padding: '10px' }}>
              <h1 className='textBody'>For more information on bonds, click on the sources below: </h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <a href="https://rentalbonds.vic.gov.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/rtba.jpg"
                  alt="rentalbonds"
                  width={250}
                  height={200}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://www.consumer.vic.gov.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/consumer.png"
                  alt="consumer"
                  width={350}
                  height={400}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
              <a href="https://tenantsvic.org.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ maxWidth: '200px', margin: '0 10px' }}>
                <Image
                  src="/images/accom/tenants.png"
                  alt="tenants"
                  width={350}
                  height={400}
                  objectFit='contain'
                  style={{ position: 'relative' }}
                />
              </a>
            </div>
          </div>


        </AccordionDetails>
      </Accordion>
    </div>
  );
}

{/* MAIN FUNCTION ACCOMODATIONSTEPPER */ }
export default function AccommodationStepper() {
  const cardText = (
    <> Find a place to rest your head that isn&apos;t inhabited by friendly kangaroos is a top priority.
  There are a variety of accommodations to choose from such as: student accommodation, regular housing, and even shared housing. 
  Let us help you to find some useful resources.
  </>)

  const rentChoose = `After finding a suitable accomodation, it is important to know about rental agreements and bonds`

  const PersonImageleft = (
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

  const PersonImageright = (
    <div style={{ marginLeft: '20px' }}>
      <Image
        src="/images/person-modified.png"
        alt="Descriptive Alt Text"
        width={300}
        height={200}
        objectFit='contain'
      />
    </div>
  );

  const chooseacm = `Before looking for an accomodation, it is best to know what kind of accomodation
 would suit you the best`

  return (
    <div id="accommodation-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

      <div className='stepper_heading'>
        Accomodation
      </div>

      <div style={{
        width: '80%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      
      }}>
        <p className='textBody'> {cardText}
        </p>
      </div>
      <Image
        src="/images/accom/condo.gif"
        alt="Service Provider 1"
        width={600}
        height={500}
        objectFit='contain'
        style={{ position: 'relative', marginTop: '20px' }}
      />

      {/* ACCOMODATION TYPE */}
      <div style={{ backgroundColor: '#f3f2ef', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <div className='stepper_subheading1' style={{ marginTop: '20px', marginBottom: '20px' }}>Accomodation types</div>
        <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center' }}>

          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {chooseacm}
          </div>
          {PersonImageleft}
        </div>
        <BasicAccordion />
      </div>

      {/* RENTAL AGREEMENTS & BONDS */}
      <div style={{ backgroundColor: '#f3f2ef', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className= 'stepper_subheading1' style={{ marginTop: '60px', marginBottom: '20px' }}>Rental Agreements and Bonds</div>
        <div className="chat chat-end" style={{ display: 'flex', alignItems: 'center' }}>

          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {rentChoose}
          </div>
          {PersonImageleft}
        </div>
        <BasicAccordion2 />
      </div>
    </div>
  )
}
