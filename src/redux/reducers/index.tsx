import { FetchConstants, FilmAction, FilmState } from "../types";

const initialState : FilmState = {
    filmList: [],
    detailFilm: [],
    load: false,
    sortKey: '',
    sortOrder: "desc"
}

export default function reducer(state = initialState, action : FilmAction) : FilmState{
    switch(action.type){
        case FetchConstants.FETCH_FILMS:
            return {...state, filmList: action.list, payload: action.payload}
        case FetchConstants.FETCH_DETAIL_FILM:
            return {...state, detailFilm: action.detailData}
        case FetchConstants.LOADER:
            return {...state, load: action.load}
        case FetchConstants.SORT_COL:
            return {...state, sortKey: action.sortKey}
        case FetchConstants.SET_SORT_FILMS:
            return {...state, filmList: action.list, sortOrder: action.sortOrder}
        default:
            return state;
    }
}