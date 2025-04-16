const doctorAvailability = {
    "Dr. Charma": ["2025-04-17T10:00", "2025-04-17T14:00"],
    "Dr. Rosine": ["2025-04-18T09:00", "2025-04-18T11:00"],
    "Dr. Williams": ["2025-04-19T13:00", "2025-04-19T15:00"],
    "Dr. Makombe": ["2025-04-20T10:00"],
    "Dr. Eric": ["2025-04-21T16:00"],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!doctor || !time) {
      alert('Please select a doctor and appointment time.');
      return;
    }
  
    const availableSlots = doctorAvailability[doctor] || [];
  
    // Convert both time strings to remove seconds/milliseconds for comparison
    const selectedTime = new Date(time).toISOString().slice(0, 16);
  
    const isAvailable = availableSlots.some(
      (slot) => new Date(slot).toISOString().slice(0, 16) === selectedTime
    );
  
    if (!isAvailable) {
      alert('Doctor is not available at the selected time. Please choose another time.');
      return;
    }
  
    navigate('/payment', {
      state: { doctor, time, amount },
    });
  };
    