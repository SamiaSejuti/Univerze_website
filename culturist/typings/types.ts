export {};

declare global {
    /**
     * Global types to be used in the application
     */

    interface EventDetailProps {
      event: EventItem;
    }

    type EventItem = {
        name: string;
        type: string;
        id: string;
        url: string;
        images: EventImage[];
        dates: EventDates;
        info: string;
        pleaseNote: string;
      }
      
      type EventImage = {
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
      }
      
      type EventDate = {
        localDate: string;
        localTime: string;
        dateTime: string;
      }
      
      type EventStatus = {
        code: string;
      }
      
      type EventDates = {
        start: EventDate;
        timezone: string;
        status: EventStatus[];
      }

      type EventPages = {
        number: number;
        size: number;
        totalElements: number;
        totalPages: number;
      }

      type AverageRent = {
        region: string;
        council: string;
        average_rent: number;
      }
}