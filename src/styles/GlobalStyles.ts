import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
    font-family: sans-serif;
}

#root {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100vh;
}
`;
export default GlobalStyles;
