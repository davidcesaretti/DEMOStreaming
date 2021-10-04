import React from 'react'
import style from './footer.module.css'
import {Link} from 'react-router-dom'
import facebook from '../../assets/social/facebook-white.svg'
import twitter from '../../assets/social/twitter-white.svg'
import instagram from '../../assets/social/instagram-white.svg'
import apple from '../../assets/store/app-store.svg'
import google from '../../assets/store/play-store.svg'
import microsoft from '../../assets/store/windows-store.svg'

export function Footer () {
    return (
        <div className={style.ctn}>
            <div className={style.options}>
                <div>
                    <div className={style.info} >
                        <Link to="/" className={style.option}>Home</Link>
                        <Link to="/" className={style.option}>Terms and Conditions</Link>
                        <Link to="/" className={style.option}>Privacy Policy</Link>
                        <Link to="/" className={style.option}>Collection Statement</Link>
                        <Link to="/" className={style.option}>Help</Link>
                        <Link to="/" className={style.lastOption}>Manage Account</Link>
                    </div>
                    <p className={style.copyright}>Copyright © 2016 DEMO Streaming. All rights reserved</p>
                </div>
                <div className={style.icons}>
                    <div className={style.media}>
                        <Link to="/"><img className={style.social} src={facebook}/></Link>
                        <Link to="/"><img className={style.social} src={twitter}/></Link>
                        <Link to="/"><img className={style.social} src={instagram}/></Link>
                    </div>
                    <div className={style.downloads}>
                        <Link to="/"><img className={style.store} src={apple}/></Link>
                        <Link to="/"><img className={style.store} src={google}/></Link>
                        <Link to="/"><img className={style.store3} src={microsoft}/></Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}