import React from 'react';
import './PointTwo.css'
import tickMark from '../../../public/taskPhoto/tickMark.png';
import magnify from '../../../public/taskPhoto/magnify.png';
import row from '../../../public/taskPhoto/row.png';
import plainTicket1 from '../../../public/taskPhoto/plainTicket1.png'
import arrow from '../../../public/taskPhoto/arrow.png'

const PointTwo = () => {
    return (
        <>
            <div className='containerStyle'>
                <div className='secondContainer'>
                    <div className='titleSection'>
                        <span className='title'>POINT</span>
                    </div>
                    <div className='titleSection'>
                        <span className='textOne'>こんなひとにおすすめ!</span>
                    </div>

                    {/* row */}
                    <div className='rowStyle'>
                        <div className='tickMarkRow'>
                            <img src={tickMark} alt="" />
                            <span className='tickMarkText'>とにか <span className='tickMarkStyle'>く安く申し込みたい方</span> </span>
                        </div>
                        <div className='tickMarkRow'>
                            <img src={tickMark} alt="" />
                            <span className='tickMarkText'> <span className='tickMarkStyle'>希望の国やプラン </span>が決まっている方</span>
                        </div>
                        <div className='tickMarkRow'>
                            <img src={tickMark} alt="" />
                            <span className='tickMarkText'>現地スタッフと <span className='tickMarkStyle'>直接やりとりをしたい </span></span>
                        </div>
                        <div className='tickMarkRow'>
                            <img src={tickMark} alt="" />
                            <span className='tickMarkText'>自分のペー <span className='tickMarkStyle'>で留学プランを </span>したい方</span>
                        </div>
                    </div>

                    {/* reason section */}


                    <div className='titleSection'>
                        <span className='title'>REASON</span>
                    </div>
                    <div className='titleSection'>
                        <span className='textOne'>最低価格保証を実現できる理由</span>
                    </div>


                    {/* row */}

                    <div className='backgroundPlain'>

                       <div>
                       <div className='singleRow'>
                            <img src={magnify} alt="magnify" />
                            <div className='rowRightSide'>
                                <h5 className='textHandle blueText'>いつでもどこでも申し込める</h5>
                                <img src={row} alt="" />
                                <p className='textHandle'>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでもどこでも申し込んだり留学準備を進めることができます。</p>
                            </div>
                        </div>


                        <div className='singleRow'>
                            <img src={magnify} alt="magnify" />
                            <div className='rowRightSide'>
                                <h5 className='textHandle blueText'>いつでもどこでも申し込める</h5>
                                <img src={row} alt="" />
                                <p className='textHandle'>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでもどこでも申し込んだり留学準備を進めることができます。</p>
                            </div>
                        </div>


                        <div className='singleRow'>
                            <img src={magnify} alt="magnify" />
                            <div className='rowRightSide'>
                                <h5 className='textHandle blueText'>いつでもどこでも申し込める</h5>
                                <img src={row} alt="" />
                                <p className='textHandle'>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでもどこでも申し込んだり留学準備を進めることができます。</p>
                            </div>
                        </div>
                       </div>


                    </div>

                </div>

                {/* footer section */}
                
                

            </div>

            <div className="dualImages">
                <img className='plainOne' src={plainTicket1} alt="" />
                 
                    <div className='titleSection textThree'>
                        <h3 className='textOne '>会員登録 でお得な クーポン<br/>
                        プレゼント中!</h3>
                    </div>

                    <div className='plainBTN'>
                    <a className='BTN'>簡単30秒！会員登録 <img className='arrow' src={arrow} alt="" /> </a>
                    </div>
                    



                </div>


        </>
    );
};

export default PointTwo;