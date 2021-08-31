import { loadavg } from "os";
import { FetchConstants, FilmAction } from "../types";

export function fetchFilms(list: any[], payload: string) : FilmAction{
    return {
        type: FetchConstants.FETCH_FILMS,
        list: list,
        payload: payload,
    }
}

export function LoadShow(): FilmAction{
    return {
        type: FetchConstants.LOADER,
        load: true
    }
}

export function LoadHide(): FilmAction{
    return {
        type: FetchConstants.LOADER,
        load: false
    }
}

export function fetchDetailFilm(list: any[]) : FilmAction{
    return {
        type: FetchConstants.FETCH_DETAIL_FILM,
        detailData: list
    }
}

export function SortingMovies(sortKey: string) : FilmAction{
    return{
        type: FetchConstants.SORT_COL,
        sortKey: sortKey
    }
}

export function SetSortingFilms(list: any[], sortOrder: string) : FilmAction{
    return {
        type: FetchConstants.SET_SORT_FILMS,
        list: list,
        sortOrder: sortOrder
    }
}
