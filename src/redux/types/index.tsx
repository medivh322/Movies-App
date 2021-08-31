export enum FetchConstants{
    LOADER = "LOADER",
    FETCH_FILMS = "FETCH_FILMS",
    FETCH_DETAIL_FILM = "FETCH_DETAIL_FILM",
    SORT_COL = 'SORT_COL',
    SET_SORT_FILMS = "SET_SORT_FILMS"
}

export enum AppConstant{
    SHOW_LOADER = "SHOW_LOADER",
    HIDE_LOADER = "HIDE_LOADER"
}

export interface FilmState{
    filmList: any[];
    payload? : string;
    detailFilm: any[];
    load?: boolean; 
    sortKey: string;
    sortOrder: string;
}

interface FetchDetailFilmAction{
    type: FetchConstants.FETCH_DETAIL_FILM,
    detailData: any[],
}

interface FetchFilmsAction{
    type: FetchConstants.FETCH_FILMS;
    list: any[];
    payload?: string; 
}

interface LoaderAction{
    type: FetchConstants.LOADER;
    load: boolean;
}

interface Sorting{
    type: FetchConstants.SORT_COL;
    sortKey: string;
}

interface SetSortingFilms{
    type: FetchConstants.SET_SORT_FILMS;
    list: any[];
    sortOrder: string;
}

export type FilmAction = FetchFilmsAction | FetchDetailFilmAction | LoaderAction | Sorting | SetSortingFilms;