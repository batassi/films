import { useMemo, useState } from "react";
import { useLocation, useSearch } from "wouter";
import { Container, Flex, Section, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

import { useData } from "../../contexts/dataContext";
import DropDown from "../dropDown/DropDown";
import { InputField, SearchButton } from "./SearchForm.Styles";

const DEFAULT_GENRE = { label: "All Genres", value: "all" };

const SearchForm = () => {
    const queryString = useSearch();
    const searchParams = new URLSearchParams(queryString);
    const [, navigate] = useLocation();
    const { genres } = useData();
    const [query, setQuery] = useState(
        { genre: searchParams.get("genre") || DEFAULT_GENRE, search: searchParams.get("query") || "" }
    );

    const genreOptions = useMemo(() =>
        ([DEFAULT_GENRE, ...genres.map((genre) => ({ label: genre.title, value: genre.id }))]),
    [genres]);

    const handleRunSearch = () => {
        const searchParams = new URLSearchParams();
        if(query.genre.value !== "all") searchParams.set("genre", query.genre.label);
        if(query.search) searchParams.set("query", query.search);
        navigate(`/search?${searchParams.toString()}`);
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleRunSearch();
        }
    };
    
    return (
        <Container size="3">
            <Section size="4">
                <Flex direction="row" gap="2" onKeyDown={handleKeyDown}>
                    <DropDown
                        options={genreOptions} value={query.genre}
                        onSelect={(value) => setQuery(prev => ({...prev, genre: value }))}
                    />
                    <InputField 
                        size="3" placeholder="Search Movies" value={query.search}
                        onChange={(e) => setQuery(prev => ({...prev, search: e.target.value }))}
                    >
                        <TextField.Slot>
                            <Search height="16" width="16" />
                        </TextField.Slot>
                    </InputField>
                    <SearchButton size="3" onClick={handleRunSearch}>Search</SearchButton> 
                </Flex>
            </Section>
        </Container>
    );
};

export default SearchForm;