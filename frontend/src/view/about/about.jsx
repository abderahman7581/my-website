import React from 'react';
import Lottie from 'lottie-react';
import programmingAnimation from './programming.json'
import './about.css'
import MainLogo from "../../assets/profile.jpg"


export default function AboutView() {
    return (
        <>
            <div className='allHolder flex border'>
                <Lottie className='img' animationData={programmingAnimation}></Lottie>
                <div className='container flex'>
                    <img className='zeroImg' src={MainLogo} ></img>
                </div>
                <p className='title'>عبدالرحمن</p>
                <div className='all'>
                    <div className=' subTitleContainer'>
                        <p className='subTitle'> عبدالرحمن بن طارق الكتامي من الجزائر ، مبرمج غير حاذق بصنعته ، إنما يجتهد لتحسينها ويتعلم ، مهتم بالبرمجة و الحاسوب إلا ماكان من جملة الويب
                            <br></br> مهتم بلغة العرب مدرك لرفعة قدرها وعظيم أمرها ، و منهجه أن تعلم قبل أن يفنى شبابك و يذهب بصرك وخذ شيئا من كل شيء وكل شيء من شيء</p>
                    </div>

                    <div className=' subTitleContainer subTitle2'>
                        <p className='subTitle'><br></br></p>
                    </div>
                </div>
            </div>
        </>
    )
}
