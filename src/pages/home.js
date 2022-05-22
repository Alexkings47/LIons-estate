import React from 'react'
import Header from "../components/Header/Header";
import Outlook from "../components/outlook/Outlook";
import NewAdditions from "../components/NewAdditions";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Services from '../components/Services';

const home = () => {
  return (
    <div>
      <Header />
      <Services />
      <Outlook />
      <NewAdditions />
      <Featured />
      <Footer />
    </div>
  );
}

export default home