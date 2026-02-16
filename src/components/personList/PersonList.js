import PropTypes from "prop-types";
import { Avatar, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { CircleUserRound } from "lucide-react";

import { List, PersonListContainer } from "./PersonList.Styles";

const propsTypes = {
    persons: PropTypes.arrayOf(PropTypes.string).isRequire,
    title: PropTypes.string.isRequired,
};

const PersonList = ({ persons, title}) => {
    return(
        <PersonListContainer>
            <Heading as="h3">{title}</Heading>
            <Separator my="3" size="4" />
            <List direction="column" gap="2">
                {!!persons && persons.map((person, index) =>
                    <Flex key={index} direction="row" gap="2" align="center">
                        <Avatar radius="full" fallback={<CircleUserRound height="30" width="30" />} />
                        <Text>{person}</Text>
                    </Flex>
                )}
            </List>
        </PersonListContainer>
    );
};

PersonList.propsTypes = propsTypes;
export default PersonList;