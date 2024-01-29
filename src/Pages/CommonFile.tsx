import React from 'react';
import Header from './Header/Header';

interface IProps {
  screenName: string;
}
function CommonFile(props: IProps) {
  return (
    <div className='App'>
      <h2>{props.screenName}</h2>
    </div>
  );
}

export default CommonFile;
