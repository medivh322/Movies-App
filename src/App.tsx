import React, { useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ListFilms from './components/list';
import { fetchFilms, SortingMovies } from './redux/actions';
import {BrowserRouter, NavLink, Route, RouteComponentProps} from 'react-router-dom';
import './style.css';
import FilmDetailPage from './components/userItemPage';
import { FetchConstants } from './redux/types';
  
const App = (state: any) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const { SortingMovies } = state;

  const clickInputHandler = () => {
    if(null !== inputRef.current){
      dispatch({
        type: "FETCH_MOVIE",
        id: inputRef.current.value
      });
    }
  }

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="navigation">
          <NavLink to="/Movies-App/">Главная</NavLink>
          <NavLink to="/Movies-App/about">О команде</NavLink>
        </div>
        <Route path={'/Movies-App/'} exact>
          <div className="d-flex">
            <input type="text" ref={inputRef} placeholder="Название фильма на англ"/>
            <button onClick={(e) => clickInputHandler()}>Поиск</button> 
            <div className="sorting"> 
              <p onClick={() => SortingMovies("Year")}>Год</p>
              <p onClick={() => SortingMovies("Title")}>Название</p>
            </div>
            {(state.load) ? 
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>  
              : ""
            }
          </div>
          <ListFilms />
        </Route>
        <Route path={'/Movies-App/about'} exact>
          <div>Hello, my name is Emil</div>
        </Route>
        <Route path={'/Movies-App/film/:id'} exact>
          <FilmDetailPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  fetchFilms,
  SortingMovies
}
const mapStateToProps = (state: any) => {
  return {
    state: {
      filmList: state.filmList,
      load: state.load
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
