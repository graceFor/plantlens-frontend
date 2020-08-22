import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face {
    font-family: 'JSDongkang-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff');
    
}
            
    html, body {
        height: 100%;
    }
    #root {
        font-family: 'JSDongkang-Regular';
        font-weight: normal;
        font-style: normal;
        height: 100%;
    }
    
    


`;

export default GlobalStyles;
