import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import moment from 'moment-timezone';
import Button from '@mui/material/Button';
export default function EventCard({ eventItem }: { eventItem: EventItem }) {

  return (
    <Card sx={{
      maxWidth: 320,
      mx: 2,
      my: 2,
      transition: 'box-shadow 0.3s',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      },
    }}>
      <CardMedia
        component="img"
        // Setting the height to a fixed value
        style={{ height: '250px', objectFit: 'cover' }}
        image={eventItem.images[0].url}
        alt={eventItem.name}
      />
      <Link href={`/events/${eventItem.id}`}>
        <CardHeader sx={{ height: '100px' }}
          title={
            <span style={{ fontWeight: 'bold', fontSize: 'small' }}>
              {eventItem.name}
            </span>
          }
          subheader={
            <Typography variant="subtitle2" sx={{ color: '#EE6F57' }}>
              Date: {moment.tz(eventItem.dates.start.dateTime, 'Australia/Melbourne').format('MMM DD')}
              <br />
              Time: {moment.tz(eventItem.dates.start.dateTime, 'Australia/Melbourne').format('hh:mm A')}
            </Typography>
          }
        />
        <CardActions disableSpacing>
          <Button variant="contained" color="primary" style={{ backgroundColor: '#F6C324', color: 'white' }}>
            Details
          </Button>
        </CardActions>
        {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          {eventItem.info}
        </Typography>
      </CardContent> */}
      </Link>
    </Card>
  );
}
