import { useMemo, useState } from "react";
import { Flex, Section, TextField } from "@radix-ui/themes";
import { Search } from "lucide-react";

import { useData } from "../../contexts/dataContext";
import { PageContent} from "../../layout/pageContent/PageContent.Styles";
import DropDown from "../../components/dropDown/DropDown";
import { InputField, SearchButton } from "./Home.Styles";

const DEFAULT_GENRE = { label: "All Genres", value: "all" };

const Home = () => {
    const { genres } = useData();
    const [query, setQuery] = useState({ genre: DEFAULT_GENRE, search: "" });

    const genreOptions = useMemo(() =>
        ([DEFAULT_GENRE, ...genres.map((genre) => ({ label: genre.title, value: genre.id }))]),
    [genres]);
    
    return (
        <PageContent size="3">
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
        </PageContent>
    );
};

export default Home;