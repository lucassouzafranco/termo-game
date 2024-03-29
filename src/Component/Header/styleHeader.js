import styled from "styled-components";

export const Main = styled.main`
  background-color: #6E5C62;
  height: 11vh;
  display: flex;
  justify-content: center;
  padding-top: 0.1em;
`

export const Menu = styled.menu`
  background-color: #6E5C62;
  font-family: Mitr, sans-serif;
  font-weight: 800;
  font-size: x-large;
  color: white;
  text-align: center;
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const StyledButton = styled.button`
  border: 3px solid #B7AEB4;
  width: 2vw;
  height: 3.9vh;
  border-radius: 5px;
  background-color: #6E5C62;
  color: #B7AEB4;
  cursor: pointer;
`

export const HelpButton = styled.div`
  font-weight: 700;
`

export const IconStyle = styled.div`
  font-size: medium;
  padding-top: 0.2em;
  padding-left: 0.01em;
  & a {
    color: #B7AEB4;
  }
`