import React from 'react';
// import './InvestmentPage.css';

const investments = [
  {
    id: 1,
    name: 'Carbon Capture Technology',
    description: 'Investment and incubation support for carbon capture technology.',
  },
  {
    id: 2,
    name: 'Pollution Reduction Solutions',
    description: 'Investment support for revolutionary products for air and water pollution reduction.',
  },
];

const InvestmentPage = () => {
  return (
    <div className="investment">
      <h1>Investment Opportunities</h1>
      <ul>
        {investments.map(investment => (
          <li key={investment.id}>
            <h3>{investment.name}</h3>
            <p>{investment.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentPage;
