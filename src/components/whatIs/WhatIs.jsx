import React from 'react';
import './WhatIs.css'
import whatIs from '../../../public/taskPhoto/whatIS.png'
import row from '../../../public/taskPhoto/row.png'
import arrow from "../../../public/taskPhoto/arrow.png"
import Fade from 'react-reveal/Fade';

const WhatIs = () => {
    return (
        <div>
            {/* title */}
            <Fade bottom>
                <div id='titleSection'>
                    <span id='title'>WHAT IS warple</span>
                </div>
                <div className='titleSection'>
                    <span className='textOne'>warpleって?</span>
                </div>
            </Fade>


            <div className="container">
                <Fade left>
                    <div className="column">
                        <img className='columnPhoto' src={whatIs} alt="" />
                    </div>
                </Fade>

                <Fade right>
                <div className="column">
                    <h1 id='textTwo'>留学を、<br />
                        もっとかしこく、<br />
                        おもしろく。</h1>
                    <img className='row' src={row} alt="" />
                    <p className='whatIsText'>warple は、語学学校/プログラムの検索や申込み、 渡航までの準備や学校/宿泊先 の手配まで 留学に必要なすべてをインターネット上で完結させることにより、 ど こよりも安く、どこよりもあなたらしく、 留学が実現できるサービスです。</p>
                </div>
                </Fade>
            </div>
            <Fade bottom>
            <div id='plainBTN'>
                <a className='BTN'>簡単30秒！会員登録 <img className='arrow' src={arrow} alt="" /> </a>
            </div>
            </Fade>

        </div>
    );
};

export default WhatIs;