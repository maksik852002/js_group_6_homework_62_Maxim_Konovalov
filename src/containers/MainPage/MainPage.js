import React, { Fragment } from 'react';
import NavBar from '../../components/Ui/NavBar/NavBar';
import Footer from '../../components/Ui/Footer/Footer';
import './MainPage.css';

const MainPage = () => {
  return (
    <Fragment>
      <NavBar/>
      <div className='banner'>
        <div className='banner-wrapper'>
          <h2>A multi-talented freelance web designer & front-end developer</h2>
        </div>
      </div>
      <div className='about mb-4'>
        <div className='container'>
          <h3>ABOUT</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
          <p>Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <Footer/>
    </Fragment>
    

  )
}

export default MainPage;