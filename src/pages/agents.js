import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Partners from "../components/Partners";
import {GoSignIn} from "react-icons/go"
import { AiOutlineCloudUpload } from "react-icons/ai";
import {Link } from "react-router-dom";


const agents = () => {
  return (
    <StyledSection>
      <Navbar />
      <div className="space">
        <div>
          <GoSignIn /> <h5> Sign In</h5>
        </div>
        <Link to="/newproperty" className="link">
          <AiOutlineCloudUpload /> <h5> Upload</h5>
        </Link>
        <div>
          <GoSignIn /> <h5> Sign up</h5>
        </div>
      </div>

      <Partners
        many={20}
        partnerClass={"partnerClass"}
        realtors={"All Realtors"}
      />

      <Footer />
    </StyledSection>
  );
};

export default agents;

const StyledSection = styled.section`
  .space {
    margin-top: 4rem;

    font-size: 1.5rem;
    text-align: left;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    color: rgb(15, 8, 77);

    & > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .link {
      text-decoration: none;
      color: rgb(15, 8, 77);
    }

    & h4 {
      margin-left: 1.5rem;
    }
  }
`;
