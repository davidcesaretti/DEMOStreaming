import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import style from './series.module.css'
import { getSeries } from '../../actions'

export function Series () {

    const dispatch = useDispatch()
    const series = useSelector(state => state.series)
    const error = useSelector(state => state.error)
    const [currentPage, setCurrentPage] = useState(0)
    const [loader, setLoader] = useState(false)
    const [serie, setSerie] = useState({
        title:'',
        images:'',
        description:'',
        releaseYear:''
    })
    useEffect(() => {
        setLoader(true)
        dispatch(getSeries())
        setLoader(false)
    }, [dispatch, serie])

    const filteredmovies = series?.slice(currentPage, currentPage + 20)

    const nextPage = () => {
        if (series.length < currentPage + 20) {
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
                setSerie({
                    title: c.title,
                    images: c.images['Poster Art'].url,
                    description: c.description,
                    releaseYear: c.releaseYear
                })
            }
        })
    }
    const handlePopupClick = (e) => {
        setSerie({
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
                        <h1>Popular Series</h1>
                    </div>
                </div>
                <div className={style.content}>
                    {
                        loader ? <div className={style.Loading}><p>Loading...</p></div> :
                        error !== '' ? <div  className={style.error}><p>Oops, something went wrong...</p></div> :
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
                    {serie.title !== '' ?
                    <div className={style.popupCtn}>
                        <div className={style.popupContent}>
                            <button
                                onClick={(e) => {handlePopupClick(e)}}
                                className={style.closeBtn}
                            >
                                X
                            </button>
                            <div className={style.popupCard}>
                                <h1 className={style.popupTitle}>{serie.title}</h1>
                                <img className={style.popupImg} src={serie.images} alt={serie.title}/>
                                <p className={style.popupDescription}>{serie.description}</p>
                            </div>
                            <p className={style.popupRYear}><b>Release Year: {serie.releaseYear}</b></p>
                        </div>
                    </div>
                        : ''
                    }
                </div>
            </div>
            <div className={style.pagination}>
                {
                    series?.length > 20 ? <div className={style.buttonPag}>
                    {currentPage !== 0 ? <button
                        className={style.prevButton}
                        onClick={ prevPage }
                    >
                        {'🡄'}
                    </button> : <div></div>}
                    {currentPage !== 40 ? <button
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