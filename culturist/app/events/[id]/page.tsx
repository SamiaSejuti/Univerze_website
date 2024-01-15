import React from 'react';
import Image from 'next/image';
import moment from 'moment-timezone';

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const res = await fetch(`${process.env.EVENTS_API_BASE_URL}events/${id}.json?apikey=${process.env.TICKETMASTER_API_KEY}`);
//   const event = await res.json();

//   return {
//     props: { event }
//   };
// }

async function getEvent (eventID: string) {
  const res = await fetch(`${process.env.EVENTS_API_BASE_URL}events/${eventID}.json?apikey=${process.env.TICKETMASTER_API_KEY}`, {
      next: {
          revalidate: 0
      }
  });

  return res.json();
}

// export default function EventDetail({ event }) {

export default async function EventDetail({ params } : {
  params: {id: string}
}) {
  const event: EventItem = await getEvent(params.id);
  
  
  const aussie = `Play Aussie slang trivia and unlock the secrets to speaking like a true Aussie while diving
  into the heart of Australian pop culture. Start learning today and connect with your new mates like a seasoned local!`;

  return (
    <div className='event-detail__container w-full px-5 py-5 mx-auto my-auto'>
      <div className="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/events">Events</a></li>
          <li>{event.name}</li>
        </ul>
      </div>

      <div className="card w-full bg-base-100 shadow-xl m-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="card-body p-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h2 className="card-title text-xl md:text-2xl lg:text-3xl mb-1" style={{ marginRight: 'auto' }}>{event.name}</h2>
          <a href={event.url} className="btn btn-primary mt-1" style={{ marginLeft: 'auto' }}>Buy Tickets</a>
        </div>
      </div>

      <div className="flex h-full">
        <div className="card w-2/3 bg-base-100 shadow-xl m-1 flex-grow">
          <div className="card-body p-2">
            <div className="event-picture__container w-full mt-1 mb-1 bg-white rounded overflow-hidden shadow-lg">
              <div className="w-full h-full object-cover">
                <Image className="w-full h-full" src={event.images[0].url} alt={event.name} width={event.images[0].width} height={event.images[0].height} />
              </div>
            </div>
            <h2 className="card-title text-xl md:text-2xl lg:text-3xl mb-1">About The Event</h2>
            <p className="event-description text-sm md:text-md lg:text-lg mt-1">{event.info}</p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 h-full">
          <div className="flex flex-col h-full">

            <div className="card bg-base-100 shadow-xl m-1 flex-grow">
              <div className="card-body p-2">
                <h2 className="card-title text-xl md:text-2xl lg:text-3xl mb-1">Date & Time</h2>
                <p className="event-date" style={{ fontSize: '20px' }}>
                  {`Date: ${moment.tz(event.dates.start.dateTime, 'Australia/Melbourne').format('MMM DD')}, Time: ${moment.tz(event.dates.start.dateTime, 'Australia/Melbourne').format('hh:mm A')}`}
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl m-1 flex-grow">
              <div className="card-body p-2">
                <h2 className="card-title text-xl md:text-2xl lg:text-3xl mb-1">Location</h2>
                <p className="event-location-desc text-sm md:text-md lg:text-lg mt-2">Melbourne</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl m-1 flex-grow" style={{ backgroundColor: '#FADCD9' }}>
              <div className="card-body p-2">
                <h2 className="card-title text-xl md:text-2xl lg:text-3xl mb-1">Learn About Australian Culture</h2>
                <p className="event-description text-sm md:text-md lg:text-lg mt-1">{aussie}</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a href="/trivia" className="btn btn-primary mt-1">Play Aussie Trivia</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
