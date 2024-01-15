import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Trivia() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0' }}>

      <div style={{ marginTop: '20px', backgroundColor: 'white', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '40px', fontFamily: 'Ubuntu, Arial', color: 'rgb(245, 173, 38)' }}>
          Aussie Trivia
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          src="/images/trivia/kng2.gif"
          alt="Kangaroo"
          width={350}
          height={200}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '250px', marginTop: '30px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', height: '100px', width: '750px' }}>
          <div style={{ fontSize: '24px', fontFamily: 'Ubuntu', fontWeight: 'bold', marginBottom: '20px', color: 'rgb(245, 173, 38)' }}>
          G&apos;day, mates, and welcome to the ultimate online Aussie Adventure Trivia game
          </div>
          <div style={{ fontSize: '20px', fontFamily: 'Ubuntu', fontWeight: '300', marginBottom: '20px' }}>
            Strap on your thongs, grab a cold brew, and let&apos;s dive deep into the land Down Under.
          </div>
          <div style={{ marginTop: '30px', fontSize: '24px', fontFamily: 'Ubuntu', fontWeight: 'bold', marginBottom: '20px', color: 'rgb(4, 91, 190)' }}>
            Choose a Trivia game to begin
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0' }}>
        <a href="/aussieSlang"  rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ position: 'relative', width: '300px', backgroundColor: '#fad7bf', margin: '10px', textAlign: 'center', padding: '20px', borderRadius: '5px', marginBottom: '100px', cursor: 'pointer' }}>
            <Image
              src="/images/trivia/au.jpeg"
              alt="Aussie Slang quiz"
              width={300}
              height={200}
              objectFit="contain"
            />
            <h2 style={{ marginTop: '10px', fontSize: '24px', fontFamily: 'Ubuntu' }}>Aussie Slang quiz</h2>
            <p style={{ marginTop: '15px', fontSize: '14px', fontFamily: 'Ubuntu', fontWeight: 'lighter' }}>
              You arrive in Melbourne, ready to explore the city, but there&apos;s a twist -
              you need to decipher the Aussie slang to navigate this linguistic labyrinth!
            </p>
          </div>
        </a>
        <a href="/popCulture"  rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ position: 'relative', width: '300px', backgroundColor: '#fad7bf', margin: '10px', textAlign: 'center', padding: '20px', borderRadius: '5px', marginBottom: '100px', cursor: 'pointer' }}>
            <Image
              src="/images/trivia/flag.jpeg"
              alt="Pop-culture quiz"
              width={300}
              height={200}
              objectFit="contain"
            />
            <h2 style={{ marginTop: '10px', fontSize: '24px', fontFamily: 'Ubuntu' }}>Pop-culture quiz</h2>
            <p style={{ marginTop: '15px', fontSize: '14px', fontFamily: 'Ubuntu', fontWeight: 'lighter' }}>
              Time to test your knowledge of Australian pop-culture, mate! We&apos;re
              talking about more than just kangaroos and koalas -
              it&apos;s all things movies, stars, music, and sports down under.
            </p>
          </div>
        </a>

        <a href="/stepByStepGuide"  rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ position: 'relative', width: '300px', backgroundColor: '#fad7bf', margin: '10px', textAlign: 'center', padding: '20px', borderRadius: '5px', marginBottom: '100px', cursor: 'pointer' }}>
            <Image
              src="/images/trivia/guy.jpeg"
              alt="Step-by-step guide"
              width={300}
              height={200}
              objectFit="contain"
            />
            <h2 style={{ marginTop: '10px', fontSize: '24px', fontFamily: 'Ubuntu' }}>Survival Kit Quiz</h2>
            <p style={{ marginTop: '15px', fontSize: '14px', fontFamily: 'Ubuntu', fontWeight: 'lighter' }}>
              Now that you&apos;ve breezed through the student survival kit,
              it&apos;s time to put your knowledge to the test in our epic student survival trivia quiz! You got this
            </p>
          </div>
        </a>


      </div>
    </div>
  );
}
