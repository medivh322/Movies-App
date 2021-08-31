import { ListProps } from "../../types";
import { Link } from 'react-router-dom';

const ListFilmsItem = ({title, year, poster, id}: ListProps) => {
    return(
        <div className="col-3">
            <Link to={`/Movies-App/film/${id}`}>
                <div className="card">
                    <img src={poster} alt="" className="card__img"/>
                    <p className="card__title">
                        {title}
                    </p>
                    <div className="card__year">
                        {year}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ListFilmsItem;