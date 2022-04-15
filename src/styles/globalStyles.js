import { normalize } from 'styled-normalize';
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
        html, body, #root {
            /* max-width: 1440px; */
            /* margin: 0 auto; */
        }
        ${normalize}
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter";
        box-sizing: border-box;
    }

    #root{
        background-color: var(--main-background);
    }

    :root {
        --margin: 10px;
        --height: 60px;
        --transition: 0.3s linear;
        --brd-radius: 10px;
        --hover-color: #FBFBFB;
        --red-card: #CE3459;
        --blue-card: #2F8CF6;
        --green-card: #DFF850;
        --purple-card: #7753F6;
        --orange-card: #FF7F10;
        --card-text-color-2: #FFCBC2;
        --card-text-color-3: #F5FFBB;
        --card-text-color-4: #E4F9FF;
        --card-text-color: #FFE1CF;
        --pink: #FBE7EB;
        --white: #ffffff;
        --black: #000000;
        --black2:#2E3456;
        --green: #16AA16;
        --orange: #F26110;
        --sunlight: #E4BA99;
        --green-hover: #189B18;
        --orange-background: #FEF4EE;
        --orange-background-hover: #FBE0D0;
        --main-background: #ECEFF3;
        --btn-color: #E4E7EC;
        --btn-hover-color: #D3D6DC;
        --menu-icon-color: #C0C2CC;
        --menu-text-color: #808080;
        --aside-width: 250px;
        --aside-padding-x: 15px;
        --aside-background: #fff;
        --aside-item-active: #f1f1f1;
        --layout-background: #ECEFF3;
        --aside-collapsed-width: 70px;
        --aside-icon-hovered-light:#f1f1f1;
        --box-shadow: 0px 2px 2px rgba(223, 226, 235, 0.79);
    }
`