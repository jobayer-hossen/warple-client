import React from 'react';
import './Point.css'
import image3 from '../../../public/taskPhoto/image 3.png'
import image5 from '../../../public/taskPhoto/image 5.png'
import image4 from '../../../public/taskPhoto/image 4.png'
import row from '../../../public/taskPhoto/row.png'
import Fade from 'react-reveal/Fade';

const Point = () => {
    return (
        <div>
            {/* title */}
            <Fade bottom>
                <div id='titleSection'>
                    <span id='title'>POINT</span>
                </div>
                <div className='titleSection'>
                    <span className='textOne'>warpleの3つのポイント</span>
                </div>
            </Fade>
            <div className="container">
                {/* card 1  */}

                <div className="column">
                    <Fade left>
                        <img className='columnPhoto' src={image3} alt="" />
                        <h1 className='textTwo'>どこよりも<br />
                            安く留学できる</h1>
                        <img src={row} alt="" />
                        <p id='textWidth'>warple は、語学学校/プログラムの検索や申込み、 渡航までの準備や学校/宿泊先 の手配まで 留学に必要なすべてをインターネット上で完結させることにより、 ど こよりも安く、どこよりもあなたらしく、 留学が実現できるサービスです。</p>
                    </Fade>
                    <Fade left>
                        <img className='columnPhoto' src={image5} alt="" />
                        <h1 className='textTwo'>いつでもどこでも<br />
                            申し込める</h1>
                        <img src={row} alt="" />
                        <p id='textWidth'>語学学校/宿泊先の空き状況やキャンペーン情報をリアルタイムで知ることができるため、warpleならいつでもどこでも申し込んだり留学準備を進めることができます。</p>
                    </Fade>
                </div>

                {/* card 3 */}
                <div id='cardStyle' className="column">
                    <Fade right>
                        <img className='columnPhoto' src={image4} alt="" />
                        <div id='cardBody'>
                            <h1 className='textTwo'>自分の理想プランを<br />
                                見つけやすい</h1>
                            <img src={row} alt="" />
                            <p id='textWidth'>語学学校と直接繋がることができるシステムになっており、現地のリアルで正確な情報を知ることができるため、自分で自由に情報を見ながら留学プランを決めることができます。※語学学校と1on1のチャットができるのは申し込み後です。</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Point;