import React from 'react';
// import './ServicesPage.css';

const services = [
  {
    id: 1,
    name: 'Green Business Transformation',
    description: 'Consulting services for transforming your business into a green business.',
  },
  {
    id: 2,
    name: 'Green Building Certification',
    description: 'Consulting services for Green Building and Green Factory Certifications.',
  },
];

const ServicesPage = () => {
  return (
    <div className="services">
      <h1>Services</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
