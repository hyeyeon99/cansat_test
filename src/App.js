import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '1', '2', '3', '4', '5', '6','7','8'],
  datasets: [
    {
      label: 'Altitude',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255,0,0,0.4)',
      borderColor: 'rgba(255,0,0,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255,0,0,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255,0,0,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 45, 48]
    }
  ]
};

function App() {
  return (
    <div>
        <h2>Line Chart</h2>
        <Line 
        data={data}
        width={100}
        height={100} />
    </div>
  );
}
export default App;