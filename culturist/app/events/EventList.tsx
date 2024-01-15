'use client';
import Divider from '@/components/Divider';
import EventCard from '@/components/EventCard';
import EventsLoader from '@/components/EventsLoader';
import SearchBar from '@/components/SearchBar';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { Suspense, useEffect, useState, useCallback } from 'react';


function getEvents () {
  const url = new URL(`${process.env.EVENTS_API_BASE_URL}events.json?apikey=${process.env.TICKETMASTER_API_KEY}`)
  url.searchParams.set('source', 'Ticketmaster')
  url.searchParams.set('city', 'Melbourne')
  url.searchParams.set('size', '80')
  return fetch(url)
    .then((res) => res.json());
}

function getEventsPagination (size: string, page: string) {
  const url = new URL(`${process.env.EVENTS_API_BASE_URL}events.json?apikey=${process.env.TICKETMASTER_API_KEY}`)
  url.searchParams.set('source', 'Ticketmaster')
  url.searchParams.set('city', 'Melbourne')
  url.searchParams.set('page', page)
  url.searchParams.set('size', '80')
  return fetch(url)
    .then((res) => res.json());
}

export default function EventList() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [pages, setPages] = useState<EventPages>({ number: 0, size: 0, totalElements: 0, totalPages: 0 });
  const [uniqueEvents, setUniqueEvents] = useState<{ [key: string]: EventItem }>({});


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Call the search function
      handleSearch(e.currentTarget.value);
    }
  };
  

  const updateUniqueEvents = (eventsData: EventItem[]) => {
    let newUniqueEvents = {};
    eventsData.forEach(event => {
      const eventName = event.name.split(' ').slice(0,3).join(' ');  
      if (!newUniqueEvents[eventName]) {
        newUniqueEvents[eventName] = event;
      }
    });
    
    const uniqueEventsArray = Object.values(newUniqueEvents);
    const top15UniqueEvents = uniqueEventsArray.slice(0, 15);  
    
    setEvents(top15UniqueEvents);
  };

    
    

  const loadEvents = useCallback(() => {
    getEvents()
      .then((data) => {
        // console.log(data);
        if (data && data["_embedded"] && data["_embedded"]["events"]) {
          updateUniqueEvents(data["_embedded"]["events"]);
          setPages(data["page"]);
        }
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []); 

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);
  

  const handleSearch = (keyword: string) => {
    if (keyword.trim() === '') {
      // Reload all events if keyword is empty
      loadEvents();
      return;
    }
  
    const filteredEvents = events.filter(event => event.name.toLowerCase().includes(keyword.toLowerCase()));
    setEvents(filteredEvents);
  };
  

  const handlePagination = (event: any, value: number) => {
    getEventsPagination('20', value.toString())
      .then((data) => {
        if (data && data["_embedded"] && data["_embedded"]["events"]) {
          updateUniqueEvents(data["_embedded"]["events"]);
          setPages(data["page"]);
        }
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} onKeyPress={handleKeyPress} />
      <Divider />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Typography variant='h3' sx={{ color: 'black' }}>
          Upcoming events
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {events.map((event, index) => (
          <Suspense key={index} fallback={<EventsLoader />}>
            <EventCard eventItem={event} />
          </Suspense>
        ))}
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          page={pages.number}
          count={pages.totalPages}
          onChange={handlePagination}
          color="primary"
          sx={{ '& .MuiPaginationItem-root': { borderRadius: 20 } }}
        />
      </Box>
    </Container>
  );
}
