import React from 'react';
import './Footer.css'
import logo from '../../../public/taskPhoto/icon2.png'
import instagramLogo from '../../../public/taskPhoto/instagram.png'
import lineLogo from '../../../public/taskPhoto/line.png'
import twitterLogo from '../../../public/taskPhoto/twitter.png'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div>
            <Fade bottom>
                <div className="footer">

                    {/* left side column */}

                    <div className="footerLeftSide">
                        <img src={logo} alt="" />
                        <div className='socialIcon'>
                            <img className='socialLogo' src={instagramLogo} alt="" />
                            <img className='socialLogo' src={lineLogo} alt="" />
                            <img className='socialLogo' src={twitterLogo} alt="" />
                        </div>
                    </div>

                    {/* right side column */}

                    <div className="footerRightSide">
                        <div>
                            <h3>Warpleの違い</h3>

                            <p>語学学校/宿泊</p>
                            <p>空き状況やキャンペ</p>
                            <p>ン情報をリアルタイムで</p>
                            <p>で知ることができるため、</p>
                            <p>準備を進めることができます。</p>

                        </div>

                        <div>
                            <h3>プレゼンを</h3>
                            <p>語学学</p>
                            <p>空き状況</p>
                        </div>

                        <div>
                            <h3>会員登録 でお</h3>
                            <p>情報をリアルタ</p>
                            <p>語学準備を進め情報をリ</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;