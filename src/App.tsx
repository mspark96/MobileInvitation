import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextMS } from './components/atoms/textMS';
import { TypoMS } from './design_system/typoMS';
import { ColorMS } from './design_system/colorMS';

function App() {
  return (
    <div>
      <TextMS textTypo={TypoMS.Heading1} textColor ={ColorMS.Error.Error500}>test</TextMS>
    </div>
  );
}

export default App;
