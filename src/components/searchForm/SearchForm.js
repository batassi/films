import { useMemo, useState } from "react";
import { Container, Flex, Section, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

import { useData } from "../../contexts/dataContext";
import DropDown from "../dropDown/DropDown";
import { InputField, SearchButton } from "./SearchForm.Styles";

const DEFAULT_GENRE = { label: "All Genres", value: "all" };

const SearchForm = () => {
    const { genres } = useData();
    const [query, setQuery] = useState({ genre: DEFAULT_GENRE, search: "" });

    const genreOptions = useMemo(() =>
        ([DEFAULT_GENRE, ...genres.map((genre) => ({ label: genre.title, value: genre.id }))]),
    [genres]);
    
    return (
        <Container size="3">
            <Section size="4">
                <Flex direction="row" gap="2">
                    <DropDown
                        options={genreOptions} value={query.genre}
                        onSelect={(value) => setQuery(prev => ({...prev, genre: value }))}
                    />
                    <InputField size="3" placeholder="Search Movies">
                        <TextField.Slot>
                            <Search height="16" width="16" />
                        </TextField.Slot>
                    </InputField>
                    <SearchButton size="3">Search</SearchButton> 
                </Flex>
            </Section>
        </Container>
    );
};

export default SearchForm;