import { Container } from "./PageContent.Styles";

const PageContent = ({ children }) => {
    return (
        <Container>{children}</Container>
    );
};

export default PageContent;