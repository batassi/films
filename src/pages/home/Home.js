import { useMemo, useState } from "react";
import { Container, Flex, Section, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

import { useData } from "../../contexts/dataContext";
import DropDown from "../../components/dropDown/DropDown";
import GenrePreview from "../../components/genrePreview/GenrePreview";
import { BatchLink, BatchLinkContainer, InputField, SearchButton } from "./Home.Styles";

const DEFAULT_GENRE = { label: "All Genres", value: "all" };

const Home = () => {
    const { fetchNextBatch, genres, genresData } = useData();
    const [query, setQuery] = useState({ genre: DEFAULT_GENRE, search: "" });

    const genreOptions = useMemo(() =>
        ([DEFAULT_GENRE, ...genres.map((genre) => ({ label: genre.title, value: genre.id }))]),
    [genres]);

    /**
     * Filter genres to only those that have data available
     */
    const previews = useMemo(() => {
        const genreDataKeys = Object.keys(genresData);
        return genres.filter((genre) => genreDataKeys.includes(genre.id));
    }, [genres, genresData]);
    
    return (
        <>
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

            <Container size="4">
                {previews.map((genre) => <GenrePreview key={genre.id} genre={genre} />)}

                <BatchLinkContainer>
                    <BatchLink href="#" onClick={fetchNextBatch}>Load More</BatchLink>
                </BatchLinkContainer>
            </Container>
        </>
    );
};

export default Home;