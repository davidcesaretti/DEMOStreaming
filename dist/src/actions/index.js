import axios from 'axios'
import data from '../data/sample.json'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_SERIES = 'GET_SERIES'
export const ERROR = 'ERROR'

export function getMovies () {
    return async function (dispatch) {
        try {
            let movies = data.entries.filter((e) => {
                if (e.programType === 'movie'){
                    return e
                }
            })
            let modernMovies = movies.filter((e) => {
                if (e.releaseYear > 2009) {
                    return e
                }
            })
            console.log(modernMovies.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1
                } else {
                    return 0
                }
            }))
            dispatch({
                type: GET_MOVIES,
                payload: modernMovies
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err
            })
        }
    }
}
export function getSeries () {
    return async function (dispatch) {
        try {
            let series = data.entries.filter((e) => {
                if (e.programType === 'series'){
                    return e
                }
            })
            console.log(series)
            let modernSeries = series.filter((e) => {
                if (e.releaseYear > 2009) {
                    return e
                }
            })
            console.log(modernSeries)
            console.log(modernSeries.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                } else if (a.title > b.title) {
                    return 1
                } else {
                    return 0
                }
            }))
            console.log(series[0].title)
            dispatch({
                type: GET_SERIES,
                payload: modernSeries
            })
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err
            })
        }
    }
}