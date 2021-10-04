import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './movies.module.css'
import { getMovies } from '../../actions'


export function Movies () {

    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const [currentPage, setCurrentPage] = useState(0)
    const [loader, setLoader] = useState(false)
    const [movie, setMovie] = useState({
        title:'',
        images:'',
        description:'',
        releaseYear:''
    })
    useEffect(() => {
        setLoader(true)
        dispatch(getMovies())
        setLoader(false)
    }, [dispatch, movie])

    const filteredmovies = movies?.slice(currentPage, currentPage + 20)

    const nextPage = () => {
        if (movies.length < currentPage + 20) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage + 20)
        }
    }

    const prevPage = () => {
        if (currentPage < 19) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage - 20)
        }
    }

    const handleClick = (f) => {
        filteredmovies.map((c) => {
            if (c.title == f.target.alt) {
                setMovie({
                    title: c.title,
                    images: c.images['Poster Art'].url,
                    description: c.description,
                    releaseYear: c.releaseYear
                })
            }
        })
    }
    const handlePopupClick = (e) => {
        setMovie({
            title:'',
            images:'',
            description:'',
            releaseYear:''
        })
    }


    return (
        <div>
            <div className={style.ctn}>
                <div className={style.title}>
                    <div>
                        <h1>Popular Movies</h1>
                    </div>
                </div>
                <div className={style.content}>
                    {
                        loader ? <div  className={style.loading}><p>Loading...</p></div> :
                        movies === undefined ? <div className={style.error}><p>Oops, something went wrong...</p></div>
                        :
                        filteredmovies?.map((e) => {
                            return (
                                    <div
                                        key={e.title}
                                        onClick={(f) => {handleClick(f)}}
                                        className={style.card}
                                    >
                                        <img
                                            className={style.img}
                                            src={e.images['Poster Art'].url}
                                            alt={e.title}
                                        />
                                        <p className={style.movieTitle}>{e.title}</p>
                                    </div>
                            )
                        })
                    }
                    {movie.title !== '' ?
                    <div className={style.popupCtn}>
                        <div className={style.popupContent}>
                            <button
                                onClick={(e) => {handlePopupClick(e)}}
                                className={style.closeBtn}
                            >
                                X
                            </button>
                            <div className={style.popupCard}>
                                <h1 className={style.popupTitle}>{movie.title}</h1>
                                <img className={style.popupImg} src={movie.images} alt={movie.title}/>
                                <p className={style.popupDescription}>{movie.description}</p>
                            </div>
                            <p className={style.popupRYear}><b>Release Year: {movie.releaseYear}</b></p>
                        </div>
                    </div>
                        : ''
                    }
                </div>
            </div>
            <div className={style.pagination}>
                {
                    movies?.length > 20 ? <div className={style.buttonPag}>
                    {currentPage !== 0 ? <button
                        className={style.prevButton}
                        onClick={ prevPage }
                    >
                        {'🡄'}
                    </button> : <div></div>}
                    {currentPage !== 20 ? <button
                        className={style.nextButton}
                        onClick={ nextPage }
                    >
                        {'🡆'}
                    </button> : <div></div> }
                </div> : <div></div> 
                }
            </div>
        </div>
    )
}