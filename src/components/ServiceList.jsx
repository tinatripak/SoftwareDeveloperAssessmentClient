import React, { useEffect, useState } from "react";
import { getStylistServices } from "../services/api";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getStylistServices();
        setServices(data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1>Stylist Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service._id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
