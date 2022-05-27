import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";


const NewProperty = () => {
  const [form, setForm] = React.useState({
    firstName: "",
    isChecked: true,
    price: "",
    location: "",
    url: {},
  });
  //  title,
  //   price,
  //   location,
  //   specification,
  //   status,

  return (
    <StyledSection>
      <Navbar />
      <form>
        <input
          type="text"
          name="title"
          value={form.firstName}
          placeholder="title"
        />
        <input type="number" name="price" value={form.price} />
        {/* <label for="location">location</label> */}
        <select value={form.location} name="location" id="location">
          <optgroup label="independence Layout">
            <option value="Presidential Rd">Presidential Rd</option>
            <option value="Ogui Rd">Ogui Rd</option>
          </optgroup>
          <optgroup label="trans-ekulu">
            <option value="Upper North">Upper North</option>
            <option value="Nowas">nowas</option>
          </optgroup>
        </select>
        <input type="file" name="url" placeholder="browse" value={""} />
        <input type="file" name="url" placeholder="browse" value={""} />
       
      </form>
      <Footer />
    </StyledSection>
  );
};

export default NewProperty;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
  padding: 0 3rem;
  font-family: "karla";
  color: white;

  form {
    background-color: #0f084d;
    padding: 2rem;
    height: 20rem;
    width: 600px;
    display: grid;
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    box-shadow: 2px 3px 2px black;
    border-radius: 5px;
    grid-gap: 20px;

    & > * {
      border-radius: 3px;
      font-family: "quicksand";
      text-indent: 15px;
    }
  }

  select {
    grid-column: 1/ -1;
  }
`;
