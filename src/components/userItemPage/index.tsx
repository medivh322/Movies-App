import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailFilm } from "../../redux/actions";

interface PageParameters{
    id: string;
}

const FilmDetailPage: FC = (props: any) => {
    const params = useParams<PageParameters>();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=2bf0e0c6&i=${params.id}`)
            .then(response => response.json())
            .then(data => {
                props.fetchDetailFilm(data, true)
            });
    }, [props.load]);

    return(
        <div>
            <img src={props.state.detailFilm.Poster}/>
            <p>{props.state.detailFilm.BoxOffice}</p>
            <p>{props.state.detailFilm.Language}</p>
            <div>{props.state.detailFilm.Plot}</div>
        </div>
    )
}

const mapDispatchToProps = {
    fetchDetailFilm
}

const mapStateToProps = (state: any) => {
    return{
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailPage);