import React from 'react'
import './layout.css'
import Header from  './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';

export const Layout = () => {
  return (
    <div className='container__app'>
      <Header />
      <Routers className=" " />
      <Footer />
    </div>
  )
}
