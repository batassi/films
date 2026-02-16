import { Box, Progress, Text } from "@radix-ui/themes";
import styled from "styled-components";

export const ProgressBar = styled(Progress)`
    height: 25px;
`;

export const RatingContainer = styled(Box)`
    margin: 20px 0px;
    position: relative;
`;

export const RatingValue = styled(Text)`
    font-weight: bold;
    position: absolute;
    text-align: center;
    top: 33px;
    width: 100%;
`;