import React from 'react';

interface ITemperatureProps {
  value: number;
  unit?: string;
}

const Temperature = ({ value, unit }: ITemperatureProps) => {
  return (
    <>
      {value?.toFixed(0)}
      {unit ? unit : <sup>&deg;</sup>}
    </>
  );
};

export default Temperature;
