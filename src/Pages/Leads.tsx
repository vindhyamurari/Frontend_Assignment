import React from 'react';
import InputFields from '../components/InputFields';
import "./Leads.scss";

interface IProps {
  screenName: string;
}
function Leads(props: IProps) {
  return <div className='homeScreen'>
    <InputFields />
  </div>;
}

export default Leads;
