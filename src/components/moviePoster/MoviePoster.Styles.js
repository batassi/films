import  { Link } from "wouter";
import { Box, Flex } from "@radix-ui/themes";
import styled from "styled-components";

export const MovieDetails = styled(Flex)`
    align-content: center;    
    background-color: rgba(0, 0, 0, 0.75);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    bottom: 0;
    font-weight: bold;
    height: 85px;
    padding: 0px 5px;
    position: absolute;
    text-align: center;
    width: 100%;
`;

export const MovieLink= styled(Link)`
    position: relative;
    text-decoration: none;
`;

export const Placeholder = styled(Box)`
    align-content: center;
    background-image: linear-gradient(black, gray);
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    height: 225px;
    min-width: 150px;
    padding: 0px 5px;
    text-align: center;
    width: 150px;
`;

export const Poster = styled.img`
    border-radius: 10px;
    height: 225px;
    object-fit: cover;
    width: 150px;
`;