import { Box, Card, Container, Flex, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const DetailsContainer = styled(Card)`
    flex: 2;
    padding: 20px;
`;

export const InfoContainer = styled(Flex)`
    padding: 10px 0px;
`;

export const InfoText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    position: relative;
    top: 2px;
`;

export const MoviePage = styled(Container)`
    padding-top: 50px;
`;

export const PeopleContainer = styled(Flex)`
    margin-top: 20px;
`;

export const PosterContainer = styled(Box)`
    flex: 1;
`;

export const PosterImage = styled.img`
    border-radius: 10px;
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const PosterPlaceholder = styled(Box)`
    align-content: center;
    background-image: linear-gradient(black, gray);
    border-radius: 10px;
    text-align: center;
    height: 540px;
`;

export const Summary = styled(Text)`
    margin: 15px 0px;
`;