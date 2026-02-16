import { parse } from "iso8601-duration";

export const formatDuration = (duration) => {
    const parsed = parse(duration);
    return `${parsed.hours}h ${parsed.minutes}m`;
};

export const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};