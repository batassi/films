import { useLocation, useSearch  } from "wouter";
import PropTypes from "prop-types";
import { IconButton } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { PaginationContainer, PaginationInfo } from "./Pagination.Styles";

const propTypes = {
    totalPages: PropTypes.number.isRequired
};

const Pagination = ({ totalPages }) => {
    const queryString = useSearch();  
    const [location, navigate] = useLocation();

    const isFirstPage = queryString.includes("page=1") || !queryString.includes("page=");

    /**
     * navigate to a specific page based on current query params in URL
     */
    const loadPage = (page) => {
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", parseInt(page));
        navigate(`${location}?${searchParams.toString()}`);
    };

    /**
     * navigate to next or previous page of search results based on current query params in URL
     */
    const navigatePages = (offset) => {
        const searchParams = new URLSearchParams(queryString);
        const page = searchParams.get("page") || 1;
        searchParams.set("page", parseInt(page) + offset);
        navigate(`${location}?${searchParams.toString()}`);
    };
    
    return(
        <PaginationContainer direction="row" gap="2" justify="center" align="center">
            <IconButton onClick={() => loadPage(1)} disabled={isFirstPage} size="3">
                <ChevronsLeft height="16" width="16" />
            </IconButton>
            <IconButton onClick={() => navigatePages(-1)} disabled={isFirstPage} size="3">
                <ChevronLeft height="16" width="16" />
            </IconButton>
            <PaginationInfo color="indigo" size="3">
                Page {queryString ? new URLSearchParams(queryString).get("page") || 1 : 1} of {totalPages}
            </PaginationInfo>
            <IconButton onClick={() => navigatePages(1)} disabled={queryString.includes(`page=${totalPages}`)} size="3">
                <ChevronRight height="16" width="16" />
            </IconButton>
            <IconButton onClick={() => loadPage(totalPages)} disabled={queryString.includes(`page=${totalPages}`)} size="3">
                <ChevronsRight height="16" width="16" />
            </IconButton>
        </PaginationContainer>
    );
};

Pagination.propTypes = propTypes;
export default Pagination;