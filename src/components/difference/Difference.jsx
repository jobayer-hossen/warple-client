import React from 'react';
import './Difference.css'
import difference1 from '../../../public/taskPhoto/difference1.png'
import difference2 from '../../../public/taskPhoto/difference2.png'
import circle from "../../../public/taskPhoto/circle.png"
import triangle from "../../../public/taskPhoto/triangle.png"
import crows from "../../../public/taskPhoto/crows.png"
import plainTicket3 from "../../../public/taskPhoto/plainTicket3.png"
import arrow from "../../../public/taskPhoto/arrow.png"
import Fade from 'react-reveal/Fade';

const Difference = () => {
    return (
        <div>
            
            {/* title */}
            <Fade bottom>
                <div id='titleSection'>
                    <span id='title'>DIFFERENCE </span>
                </div>
                <div className='titleSection'>
                    <span className='textOne'>留学エージェントとwarpleの違い</span>
                </div>
            </Fade>

            {/* table */}

            <Fade bottom>
                <div className='twoCard'>
                    <div className='leftSideText'>
                        <p className='singleTextLineOne'>留学費用</p>
                        <p className='singleTextLineTwo'>情報の <br />
                            正確さ</p>
                        <p className='singleTextLineTwo'>学校選択の <br />
                            自由度</p>
                        <p className='singleTextLineThree'>サポート</p>
                    </div>

                    <div className='cardLayout'>
                        <h3 className='paddingText'>warple</h3>
                        <div className='cardBody'>
                            <div id='cardContent'>
                                <img className='difference1' src={difference1} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={circle} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={circle} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={circle} alt="" />
                            </div>
                            <div className='iconPhotoLast'>
                                <img className='iconPng' src={triangle} alt="" />
                            </div>
                        </div>
                    </div>



                    <div className='cardLayoutTwo'>
                        <h3 className='paddingText'>従来の留学エージェント</h3>
                        <div className='cardBody'>
                            <div id='cardContent'>
                                <img className='difference1' src={difference2} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={crows} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={circle} alt="" />
                            </div>
                            <div className='iconPhoto'>
                                <img className='iconPng' src={triangle} alt="" />
                            </div>
                            <div className='iconPhotoLast'>
                                <img className='iconPng' src={circle} alt="" />
                            </div>
                        </div>

                    </div>


                    {/* right side */}

                    <div className='rightSideText'>
                        <p className='singleTextLineOne'>‎ </p>
                        <p className='rightSideTextLineTwo'>‎ </p>
                        <p className='rightSideTextLineFour'>‎ </p>
                        <p className='singleTextLineThree'>‎ </p>
                    </div>

                </div>
            </Fade>

            {/* only see when user device on mobile  */}

            <div className='showByResponsive'>
                <div>
                    <ul><li> warple</li></ul>
                    <img src={difference1} alt="" />
                </div>
                <div>
                    <ul><li>従来の留学エージェント</li></ul>

                    <img src={difference2} alt="" />
                </div>
            </div>
            {/* difference footer content */}
            <Fade bottom>
                <div className="dualImages">
                    <img className='plainOne' src={plainTicket3} alt="" />

                    <div id='textThree' className='titleSection'>
                        <h3 id='textFour'>会員登録 でお得な クーポン<br />
                            プレゼント中!</h3>
                    </div>

                    <div className='plainBTN'>
                        <a className='BTN'>簡単30秒！会員登録 <img className='arrow' src={arrow} alt="" /> </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Difference;