import React from 'react';
import './HowToUse.css'
import howTo from '../../../public/taskPhoto/howTo1.png'
import arrow from '../../../public/taskPhoto/arrowBTN.png'
import page from '../../../public/taskPhoto/page.png'
import mail from '../../../public/taskPhoto/Send Email.png'

const HowToUse = () => {
    return (
        <div>
            {/* title */}
            <div id='titleSection'>
                <span id='title'>HOW TO USE </span>
            </div>
            <div className='titleSection'>
                <span className='textOne'>使い方は3ステップで簡単！</span>
            </div>
            {/* three card */}
            <div className='mainCard'>

                <div className='cardSection'>

                    <div className="card">
                        <img src={howTo} alt="Card Image" />
                        <div className="cardContent">
                            <h5>自分の希望に合った <br /> 語学学校・プランを探す </h5>
                        </div>
                        <p className='style'></p>
                    </div>
                    <span><img src={arrow} alt="" /></span>
                    <div className="card">
                        <div >
                            <img id='pageImage' src={page} alt="Card Image" />
                        </div>
                        <div className="cardContent">
                            <h5>見積もりをとって <br />
                                留学費用を確認する </h5>
                        </div>
                        <p className='style'></p>
                    </div>
                    <span><img src={arrow} alt="" /></span>
                    <div className="card">
                        <img id='iconImage' src={mail} alt="Card Image" />
                        <div className="cardContent">
                            <h5>空き状況を確認して<br />
                                お申し込みする </h5>
                        </div>
                        <p className='style'></p>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default HowToUse;