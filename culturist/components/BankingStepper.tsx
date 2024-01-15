import React from 'react'
import Image from 'next/image';


export default function BankingStepper() {

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
  const chatText = (
    <> Okay mate, now it&apos;s time to set up a bank account so you can pay your rent, bills,
  do some shopping and much more. Setting up a banking account is a fairly simple process. Let&apos;s get your
  bank account set up.
  </>)

  const chooseBank = `Selecting a bank is an important step. Consider factors like accessibility, services
  offered, and any special offers for international students. We'll help you navigate through the options.`


  const docText = `Setting up an Australian bank account is a stratghtforward and easy process. You will need
  the following documents`

  const selectBank = (
    <div className='textBody' style={{ textAlign: 'left', padding: '20px' }}>
     <p>Choosing the right bank is important for a student&apos;s financial well-being.</p>
      <p>Several important points to take into account before opening a bank account are:</p>
      <div style={{ textAlign: 'center' }}>
        <ol style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>1. Financial stability of the bank</li>
          <li>2. Customer service</li>
          <li>3. Products and services offered</li>
          <li>4. Fees and charges such as ATM, Withdrawal, and Transfer charges</li>
          <li>5. Interest rates</li>
          <li>6. Privacy and security</li>
          <li>7. Reputation of the bank</li>
        </ol>
      </div>
    </div>
  );


  return (

    <div id="banking-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div id="banking-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f2ef', width: '100vw' }}>
        <div className='stepper_heading' >
          Banking
        </div>
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {chatText}
          </div>
        </div>
        <Image
          src="/images/bank/bank.png"
          alt="Service Provider 1"
          width={500}
          height={500}
          objectFit="contain"
          style={{ position: 'relative', marginTop: '-40px' }}
        />
      </div>

      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='stepper_subheading1' style={{ marginTop: '20px', marginBottom: '20px' }}>Choosing a bank</div>
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {chooseBank}
          </div>
        </div>
        <h1 className='stepper_subhead' style={{ marginTop:'50px', margin: '0' }}>Major Australian banks</h1>
        <p className='textBody' style={{ margin: '0' }}>Australia has 5 major banks. The image below shows features of importance
          to international students.</p>

        <Image
          src="/images/bank/majorBanks.png"
          alt="Service Provider 1"
          width={1000}
          height={80}
          objectFit="contain"
          style={{ position: 'relative', marginTop: '-100px', marginBottom: '40px' }}
        />

<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
  <a href="https://www.westpac.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ marginRight: '20px' }}>
    <Image
      src="/images/bank/westpac.png"
      alt="westpac"
      width={200}
      height={100}
      objectFit='contain'
      style={{ position: 'relative' }}
    />
  </a>
  <a href="https://www.anz.com.au/personal/" target="_blank" className="transition duration-500 transform hover:scale-105" style={{ marginRight: '20px' }}>
    <Image
      src="/images/bank/anz.png"
      alt="anz"
      width={200}
      height={100}
      objectFit='contain'
      style={{ position: 'relative' }}
    />
  </a>
  <a href="https://www.commbank.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105">
    <Image
      src="/images/bank/common.png"
      alt="commonwealth"
      width={200}
      height={100}
      objectFit='contain'
      style={{ position: 'relative' }}
    />
  </a>
</div>




        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <a href="https://www.nab.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/bank/nab.png"
              alt="nab"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
          <a href="https://www1.citibank.com.au/" target="_blank" className="transition duration-500 transform hover:scale-105">
            <Image
              src="/images/bank/citi.png"
              alt="citibank"
              width={200}
              height={100}
              objectFit='contain'
              style={{ position: 'relative' }}
            />
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
          <h1 className='stepper_subhead' style={{ margin: '0' }}>Things to keep in mind before selecting a bank</h1>
          {selectBank}
        </div>
      </div>

      <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f2ef' }}>
        <div className='stepper_subheading1' style={{ marginTop: '40px', marginBottom: '20px' }}>Documents Required</div>
        <div className="chat chat-start" style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          {PersonImageright}
          <div style={{ marginTop: '20px', marginBottom: '20px' }} className="chat-bubble">
            {docText}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
  
  {/* Section 1 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '45%' }}>
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>
        1
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '300px' }}>
        <div style={{ height: '200px', marginBottom: '10px' }}>
          <Image 
            src="/images/bank/pass.jpeg" 
            alt="Section 1 Image" 
            width={300} 
            height={200} 
            objectFit="contain"
          />
        </div>
        <div style={{ fontSize:'20px'}}>
          International passport
        </div>
      </div>
    </div>
  </div>

  {/* Section 2 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '45%' }}>
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>
        2
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '300px' }}>
        <div style={{ height: '200px', marginBottom: '10px' }}>
          <Image 
            src="/images/bank/id.jpeg" 
            alt="Section 2 Image" 
            width={300} 
            height={200} 
            objectFit="contain"
          />
        </div>
        <div style={{ fontSize:'20px'}}>
          Student ID or confirmation of enrolment
        </div>
      </div>
    </div>
  </div>
</div>

{/* Sections 3 and 4 */}
<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
  
  {/* Section 3 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '45%' }}>
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>
        3
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '300px' }}>
        <div style={{ height: '200px', marginBottom: '10px' }}>
          <Image 
            src="/images/bank/tax.png" 
            alt="Section 3 Image" 
            width={300} 
            height={200} 
            objectFit="contain"
          />
        </div>
        <div style={{marginTop: '80px',  fontSize:'20px'}}>
          Tax document from your country of origin
        </div>
      </div>
    </div>
  </div>

  {/* Section 4 */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '45%' }}>
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl mr-4" style={{ minWidth: '40px', borderRadius: '50%' }}>
        4
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '300px' }}>
        <div style={{ height: '200px', marginBottom: '10px' }}>
          <Image 
            src="/images/bank/add.jpeg" 
            alt="Section 4 Image" 
            width={300} 
            height={200} 
            objectFit="contain"
          />
        </div>
        <div style={{marginTop: '80px', fontSize:'20px'}}>
          Australian residential address
        </div>
      </div>
    </div>
  </div>
</div>






      </div>




    </div>
  )
}
