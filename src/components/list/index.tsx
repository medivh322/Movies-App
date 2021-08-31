import React, { FC } from "react";
import { connect } from "react-redux";
import { FilmAction, FilmState } from "../../redux/types";
import ListFilmsItem from "../listItem";

const ListFilms = (props: any) => {
    return(
        <div className="row">
            {(props.states.filmList) ?
                props.states.filmList.map((element: any) => 
                    <ListFilmsItem title={element.Title} id={element.imdbID} poster={element.Poster} year={element.Year} key={element.imdbID}/>
                ) : 
                <div className="col-12">
                    {props.states.payload}
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state: any[]) => {
    return {
        states: state
    };
}

export default connect(mapStateToProps, null)(ListFilms);