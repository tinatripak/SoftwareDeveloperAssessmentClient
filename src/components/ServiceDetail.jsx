import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStylistServiceById } from "../services/api";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getStylistServiceById(id);
        setService(data.data);
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    fetchService();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{service.name}</h1>
      <p>Short Description: {service.shortDescription}</p>
      <p>Full Description: {service.fullDescription}</p>
      <p>Price: {service.price}</p>
    </div>
  );
};

export default ServiceDetail;
