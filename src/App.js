import React from 'react';

import Header from './components/Header';
import Card from './components/Card';
import ImagesWrapper from './components/ImagesWrapper';

import './App.css';

function App() {
  return (
    <>
      <div id="aaa">asdfasdf</div>
      <Header sirName="nabahin" className="header" />
      <ImagesWrapper>
        <Card imageUrl="https://static.toiimg.com/photo/72975551.cms"/>
        <Card imageUrl="https://static.toiimg.com/photo/72975551.cms"/>
        <Card imageUrl="https://static.toiimg.com/photo/72975551.cms"/>
        <Card imageUrl="https://static.toiimg.com/photo/72975551.cms"/>
        <Card imageUrl="https://static.toiimg.com/photo/72975551.cms"/>
      </ImagesWrapper>
    </>
  );
}

export default App;
