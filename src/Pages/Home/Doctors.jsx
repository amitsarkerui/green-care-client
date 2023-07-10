import React, { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [dept, setDept] = useState([]);
  //   console.log("8------>", dept);
  useEffect(() => {
    fetch("http://localhost:2020/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  useEffect(() => {
    setDoctorsData(doctors);
  }, [doctors]);

  useEffect(() => {
    const allDept = [...dept];
    doctors.forEach((doctor) => {
      const isInclude = allDept.includes(doctor.specialty);
      if (!isInclude) {
        allDept.push(doctor.specialty);
        setDept(allDept);
      }
    });
  }, [doctors]);
  //   console.log(doctorsData);
  //   console.log("28------>", dept);

  const handleCategory = (category) => {
    const filteredData = doctors.filter(
      (doctor) => doctor.specialty === category
    );
    setDoctorsData(filteredData);
  };
  const handleCategoryAll = () => {
    setDoctorsData(doctors);
  };
  return (
    <div className="container mx-auto">
      <SectionHeader
        subHeading={"Find a doctors"}
        heading={
          "Expert doctors guiding your health journey with personalized care and expertise"
        }
      ></SectionHeader>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-5 my-10">
        <div className="border-r border-gray-200 dark:border-gray-700 col-span-1">
          <nav
            className="flex flex-col space-y-2"
            aria-label="Tabs"
            role="tablist"
            data-hs-tabs-vertical="true"
          >
            <button
              onClick={handleCategoryAll}
              type="button"
              className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
              id="vertical-tab-with-border-item-1"
              data-hs-tab="#vertical-tab-with-border-1"
              aria-controls="vertical-tab-with-border-1"
              role="tab"
            >
              All
            </button>
            {dept.map((sd) => (
              <button
                onClick={() => handleCategory(sd)}
                type="button"
                className="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pr-4 inline-flex items-center gap-2 border-r-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
                id="vertical-tab-with-border-item-1"
                data-hs-tab="#vertical-tab-with-border-1"
                aria-controls="vertical-tab-with-border-1"
                role="tab"
              >
                {sd}
              </button>
            ))}
          </nav>
        </div>
        <div className="col-span-4 grid grid-cols-1 gap-7 md:grid-cols-3">
          {doctorsData.map((doctor) => (
            <div
              className="bg-white flex flex-col border border-gray-100 shadow-sm  rounded-lg p-6 relative"
              key={doctor?._id}
            >
              <div className="relative">
                <img
                  className="h-[300px] w-full object-cover rounded-md"
                  src={doctor?.image}
                  alt=""
                />
                <p className="absolute top-2 right-4 bg-primary px-2 py-[2px] text-sm font-medium rounded-lg text-white">
                  {doctor?.specialty}
                </p>
              </div>

              <h3 className="my-4 text-xl font-semiBold">{doctor?.name}</h3>
              <p className="text-gray-500">{doctor?.description}</p>
              <div className="my-6">
                {doctor?.availability?.map((sa, index) => (
                  <div
                    key={index}
                    className="flex gap-2 bg-gray-100 px-2 py-1 mt-2 rounded-md"
                  >
                    <p className=" text-secondary text-sm">{sa?.day}</p>
                    <p className=" text-secondary text-sm">{sa?.time}</p>
                  </div>
                ))}
              </div>
              <div className="flex-grow"></div>
              <button className="btn btn-outline mb-3">
                Book a Appointments
              </button>
              <button className="btn btn-primary text-white">
                View Doctor Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
