import { Film } from "lucide-react";
import styled from 'styled-components';

export const AppName = styled.h2`
    cursor: pointer;
    font-size: 28px;
    margin: 0.50rem 0;
`;

export const Logo = styled(Film)`
    height: 30px;
    position: relative;
    top: 6px;
    width: 30px;
`;

export const NavBar = styled.nav`
    background-color: #1c1c1c;
    padding: 0 1rem;
    position: sticky;
    top: 0;
`;