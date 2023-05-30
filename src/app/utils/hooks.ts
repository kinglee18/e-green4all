import {useQuery} from "@tanstack/react-query";
import {getProjectCount} from "@/app/projects";


export const useProjectsCount = (provider, options?) => useQuery(
    ['count'],
    () => getProjectCount(provider),
    options
);
