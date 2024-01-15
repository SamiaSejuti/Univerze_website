export function formatDate(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const date = new Date(dateString);
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayNumber = date.getDate();
    
    let suffix = 'th';
    if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
      suffix = 'st';
    } else if (dayNumber === 2 || dayNumber === 22) {
      suffix = 'nd';
    } else if (dayNumber === 3 || dayNumber === 23) {
      suffix = 'rd';
    }
    
    return `${dayName}, ${monthName} ${dayNumber}${suffix}`;
  }
  