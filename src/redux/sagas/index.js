import { takeEvery, put, take, call, select } from "@redux-saga/core/effects";
import { isConstructorDeclaration } from "typescript";
import { fetchFilms, Load, LoadHide, LoadShow, SetSortingFilms } from "../actions";
import { FetchConstants } from "../types";
import { orderBy } from 'lodash';

function* rootSaga(){
    yield takeEvery("FETCH_MOVIE", sagaWorker)
    yield takeEvery(FetchConstants.SORT_COL, sortingData);
}

export default rootSaga;

const getFilmList = (state) => state;

function* sortingData(args){
    let project = yield select(getFilmList);
    let sortOrder = (project.sortOrder == "desc") ? "asc" : "desc";
    const sortingOb = yield orderBy(project.filmList, project.sortKey, sortOrder);
    yield put(SetSortingFilms(sortingOb, sortOrder));
}

function* sagaWorker(args){
    console.log(args);
    yield put(LoadShow());
    const res = yield call(fetchMovies, args.id);   
    yield put(fetchFilms(res.Search, (!res.Search) ? "Не найдено" : ""));
    yield put(LoadHide());
}

async function fetchMovies(id){
    const response = await fetch(`http://www.omdbapi.com/?apikey=2bf0e0c6&s=${id}`);
    return await response.json();
}