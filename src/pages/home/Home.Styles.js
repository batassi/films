import { Box, Button, Link, TextField } from "@radix-ui/themes";
import styled from "styled-components";

export const BatchLink = styled(Link)`
    font-size: 18px;
    font-weight: bold;
`;

export const BatchLinkContainer = styled(Box)`
    padding: 20px 0px;
    text-align: center;
`;

export const InputField = styled(TextField.Root)`
    flex: 1;    
`;

export const SearchButton = styled(Button)`
    flex: 0.20;
`;
