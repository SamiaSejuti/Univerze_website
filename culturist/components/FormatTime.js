export function formatTime(time24) {
    const tempTime = new Date(`1970-01-01T${time24}Z`);
    return tempTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase();
  }
  
  