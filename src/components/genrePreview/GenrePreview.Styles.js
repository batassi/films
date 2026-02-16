import  { Link } from "wouter";
import { Heading } from "@radix-ui/themes";
import styled from "styled-components";

export const GenreLinks = styled(Link)`
    align-content: center;
    font-size: 18px;
    font-weight: bold;
    margin-right: -10px;
    position: relative;
    top: 5px;
`;

export const GenreName = styled(Heading)`
    flex: 1;
    margin-bottom: 10px;
    padding-bottom: 0px;
`;