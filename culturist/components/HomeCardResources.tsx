import { Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function EssentialResources() {
  return (
    <div style={{backgroundColor: '#f3f2ef'}}>
    <div id='our-services' className="mt-0" style={{ height: '100vh', maxWidth: '1450px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
      <div className="text-center mb-4">
        <p   className="landing_head">
          Essential Resources
        </p>
      </div>

      <div className="flex items-center" >
        <div className="w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            <Image src="/images/landing/resources/gramma.jpeg" alt="Image 1" width={500} height={400} objectFit='cover' className="w-full h-36 object-cover" />
          </div>
          <div className="flex mb-4">
            <Image src="/images/landing/resources/home.jpeg" alt="Image 2" width={250} height={400} objectFit='cover' className="w-1/2 h-36 object-cover mr-2" />
            <Image src="/images/landing/resources/bank_land.jpeg" alt="Image 3" width={250} height={400} objectFit='cover' className="w-1/2 h-36 object-cover" />
          </div>

          <div>
            <Image src="/images/landing/resources/visa.jpeg" alt="Image 4" width={500} height={400} objectFit='cover' className="w-full h-36 object-cover" />
          </div>
        </div>

        <div className="w-1/2 p-4" style={{ marginLeft: '2%'}}>
          <div style={{
            width: '80%',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#e5cbac'
          }}>
            <p style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>Need help with essential information?</p>
            <p style={{fontSize: '20px', marginBottom: '10px'}}>Navigate student life effortlessly with our essential resources, including a step-by-step guide on all the resources you need to have a smooth transition into Australia</p>
            <Link href="/resources">
                        <button
                    type="button"
                    className="btn"
                    style={{
                        fontSize: '20px',
                        textTransform: 'none',
                        backgroundImage: 'linear-gradient(to right, #ef5c72, #e9bc38)',
                        border: 'none',
                        color: 'white',
                    }}
                >
                    Explore Resources
                </button>
                        </Link>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}