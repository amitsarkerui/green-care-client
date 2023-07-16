import React from "react";
import SectionHeader from "../../Components/SectionHeader";

const ExServices = () => {
  return (
    <div className="bg-[#F6F7F5] py-24">
      <div className="container mx-auto">
        <SectionHeader
          subHeading={"Services"}
          heading={"Exceptional Service, Exceptional Care"}
        ></SectionHeader>
        <div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-4xl font-bold text-primary">01.</h1>
              <h4 className="text-2xl font-semibold my-4">
                Premium Health Services
              </h4>
              <p className="text-gray-400 leading-relaxed">
                When you sit down with one of our pharmacists, you receive one
                hour of his/her attention. Our pharmacist will listen to your
                concerns, conduct a thorough medication review, and help you
                find a healthier you. Our pharmacist is here to help you
                understand your health and well-being.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary">02.</h1>
              <h4 className="text-2xl font-semibold my-4">
                Main Focus of Our Private Clinic
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Our patients receive personalized care that is affordable and
                attentive, with many of them being with us since opening day in
                1996. We are well tuned to providing the best medical services
                for everyone, whether you’re passing through or have lived here
                for years.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-primary">03.</h1>
              <h4 className="text-2xl font-semibold my-4">
                Receive Quality Care from Our Staff
              </h4>
              <p className="text-gray-400 leading-relaxed">
                - Maximizing technology for better outcomes
                <br />
                - Personalized care, tailored to your needs
                <br />
                - Focus on long-term health and prevention
                <br />- Highest standards of customer service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExServices;
