import React from 'react';
import './Difference.css'
import difference1 from '../../../public/taskPhoto/difference1.png'
import difference2 from '../../../public/taskPhoto/difference2.png'
import circle from "../../../public/taskPhoto/circle.png"
import triangle from "../../../public/taskPhoto/triangle.png"
import crows from "../../../public/taskPhoto/crows.png"
import plainTicket3 from "../../../public/taskPhoto/plainTicket3.png"
import arrow from "../../../public/taskPhoto/arrow.png"

const Difference = () => {
    return (
        <div>
            {/* title */}
            <div id='titleSection'>
                <span id='title'>DIFFERENCE </span>
            </div>
            <div className='titleSection'>
                <span className='textOne'>留学エージェントとwarpleの違い</span>
            </div>

            {/* table */}




            <div className='twoCard'>


                <div className='leftSideText'>
                    <p className='singleTestLineOne'>留学費用</p>
                    <p className='singleTestLineTwo'>情報の <br />
                        正確さ</p>
                    <p className='singleTestLineTwo'>学校選択の <br />
                        自由度</p>
                    <p className='singleTestLineThree'>サポート</p>
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
                    <p className='singleTestLineOne'>‎ </p>
                    <p className='rightSideTextLineTwo'>‎ </p>
                    <p className='rightSideTextLineTwo'>‎ </p>
                    <p className='singleTestLineThree'>‎ </p>
                </div>

            </div>

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


            <div className="dualImages">
                <img className='plainOne' src={plainTicket3} alt="" />
                 
                    <div className='titleSection textThree'>
                        <h3 className='textOne '>会員登録 でお得な クーポン<br/>
                        プレゼント中!</h3>
                    </div>

                    <div className='plainBTN'>
                    <a className='BTN'>簡単30秒！会員登録 <img className='arrow' src={arrow} alt="" /> </a>
                    </div>
                    



                </div>

        </div>
    );
};

export default Difference;