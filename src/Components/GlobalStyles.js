import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import backPath from "assets/background.png";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face {
    font-family: 'paybooc-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') format('woff');
    }
            
    html, body {
        height: 100%;
        background-image: url(https://unsplash.com/photos/W1B2LpQOBxA);
        background-image: url("assets/background.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        
    }
    #root {
        font-family: 'paybooc-Bold';
        font-weight: normal;
        font-style: normal;
        color: #4D1212;
        height: 100%;
        background-image: url(${backPath});
        background-position: center;
        background-position: fixed;
        background-size: cover;
        background-repeat: no-repeat;

        
        
    }
`;

export default GlobalStyles;
