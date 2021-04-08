import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-900: #121214;
    --gray-1000: #080808;

    --animate-delay: 1s;
    --animate-duration: 900ms;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-1000);
    color: var(--white);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }
  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
