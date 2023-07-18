import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";
import "./style.css";

const PickSlot = () => {
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleErr, setScheduleErr] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [selectedDateTimeSlot, setSelectedDateTimeSlot] = useState(null);

  const doctor = useLoaderData();

  const handleConfirm = (selected) => {
    setSelectedDateTimeSlot(selected);
    setIsScheduled(true);
    setScheduleErr("");
    const appointment = {
      doctorId: doctor._id, // Use the correct property for the doctor ID
      dateTimeSlot: selected, // Use the selected value from the callback directly
    };

    console.log("Appointment Object:", appointment);

    // Perform any further actions with the appointment object, such as sending it to the server, etc.

    // Reset the state after the appointment is scheduled
    setSelectedDoctorId(null);
    setSelectedDateTimeSlot(null);
    setIsScheduled(false);

    fetch("http://localhost:2020/pickSlot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    document.getElementById("msg").innerHTML =
      "Your schedule is booked. Please make a payment to confirm it.";
  };

  return (
    <div className="container mx-auto my-24 mt-52">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-center gap-6 bg-gray-50 px-10 rounded-xl">
          <img
            className="h-96 w-96 object-cover rounded-lg"
            src={doctor.image}
            alt=""
          />
          <span>
            <h2 className="text-2xl font-bold">{doctor.name}</h2>
            <div className="my-6">
              {doctor?.availability?.map((sa, index) => (
                <div
                  key={index}
                  className="flex gap-2 bg-gray-100 px-2 py-1 mt-2 rounded-md"
                >
                  <p className="text-secondary text-sm">{sa?.day}</p>
                  <p className="text-secondary text-sm">{sa?.time}</p>
                </div>
              ))}
            </div>
          </span>
        </div>
        <div>
          <div id="msg" className="msg text-center w-full bg-gray-50 py-10">
            <DayTimePicker
              timeSlotSizeMinutes={15}
              isLoading={isScheduled}
              isDone={isScheduled}
              err={scheduleErr}
              onConfirm={handleConfirm} // Use the handleConfirm callback directly
              onCancel={() => setIsScheduled(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickSlot;
