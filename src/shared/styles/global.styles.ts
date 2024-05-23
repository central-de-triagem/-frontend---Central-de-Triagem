import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: sans-serif;
  }
`;

export const appColors = {
  green: {
    1: "#BEE4CC",
    2: "#061E28",
  },  
  blue: {
    1: "#2A9CC3",
  },
  gray: { 
    1: "#FAFAFA",
    2: "#D9D9D9"
  }
};