import React, { useEffect, useRef } from "react";
import { Minibanner } from "../Essential/Minibanner";
import '../Styles/Componentcss/Midbanner.css';
import { Dealproduct } from "../Essential/Dealproduct";

function Midbanner() {
    const swapproduct = useRef();

    let woodenimg = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/cms-banner-1.jpg?v=1652437705';
    let terraimg = 'https://cdn.shopify.com/s/files/1/0644/4820/0925/files/cms-banner-2.jpg?v=1652437717';

    //Swap function1
    function swapleft() {
        swapproduct.current.scrollLeft -= 600;
    }

    //Swap function2
    function swapright() {
        swapproduct.current.scrollLeft += 600;
    }

    // let overtime;
    // useEffect(() => {
    // let overTime = setInterval(onTime, 1000);
    // },[])
    let overTime = setInterval(onTime, 1000)

    //Showing Time function 
    let day, hour, minute, second;
    let days = document.querySelector('#days');
    function onTime() {
        let date = new Date('dec 22, 2025 16:00:00').getTime();
        let d = new Date().getTime();
        let set = date - d;

        day = Math.floor(set / (1000 * 60 * 60 * 24))
        hour = Math.floor((set % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        minute = Math.floor((set % (1000 * 60 * 60 * 24)) / (1000 * 60))
        second = Math.floor(set % (1000 * 60 * 60 * 24) / 1000);
        // console.log(day, hour, minute, second)

        days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const min = document.querySelector('#min');
        const sec = document.querySelector('#sec');

        days.innerHTML = day;
        hours.innerHTML = hour;
        min.innerHTML = minute;
        sec.innerHTML = second;

        if (days.innerHTML === '00') {
            clearInterval(overTime);
            // console.log(days.innerHTML)
        }
        // console.log(days.innerHTML)
    }
    console.log('Midbanner')
    // console.log(                                           // style console.log
    //     "%c hello world ",                             
    //     `background-color: red;
    //     color: white`)
    return (
        <>
            <div className="Mid_Body">
                <div className="Mid_banner">
                    <Minibanner Mini_img={woodenimg} Mini_offer={'40% Discount'} Mini_title={'Wooden Block Animals'} />
                    <Minibanner Mini_img={terraimg} Mini_offer={'30% Discount'} Mini_title={'Terra Speckle Cotta'} />
                </div>
                <div className="Mid_Twoitem">
                    <div className="Mid_Head">
                        <div className="Mid_Deal">
                            <h5>Deal Of The Day</h5>
                        </div>
                        <div className="Mid_Buttontime">
                            <div className="Mid_Time">
                                <div><span id="days">00</span><br />Day</div>
                                <div className="Mid_Colon">:</div>
                                <div><span id="hours">00</span><br />Hrs</div>
                                <div className="Mid_Colon">:</div>
                                <div><span id="min">00</span><br />Min</div>
                                <div className="Mid_Colon">:</div>
                                <div><span id="sec">00</span><br />Sec</div>
                            </div>
                            {/* <div>
                                <button onClick={click}>click</button>
                            </div> */}
                            <div className="Mid_Btn">
                                <div className="Mid_button">
                                    <button onClick={swapleft}><i class="fa-solid fa-caret-left"></i></button>
                                </div>
                                <div className="Mid_button">
                                    <button onClick={swapright}><i class="fa-solid fa-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Mid_Slide" ref={swapproduct}>
                        <Dealproduct Dealname={'Fakeapiname'} Dealprice={'$250.00 '} Dealunprice={'$290.00'} Dealdetail={'this is product'} Dealsale={'Sale'} Dealsalep={'-13%'} />
                        <Dealproduct Dealname={'Fakeapiname'} Dealprice={'$370.00 '} Dealunprice={'$390.00'} Dealdetail={'this is product'} Dealsale={'Sale'} Dealsalep={'-5%'} />
                        <Dealproduct Dealname={'Fakeapiname'} Dealprice={'$85.00 '} Dealunprice={'$97.00'} Dealdetail={'this is product'} Dealsale={'Sale'} Dealsalep={'-12%'} />
                        <Dealproduct Dealname={'Fakeapiname'} Dealprice={'$70.00 '} Dealunprice={'$75.00'} Dealdetail={'this is product'} Dealsale={'Sale'} Dealsalep={'-6%'} />
                        <Dealproduct Dealname={'Fakeapiname'} Dealprice={'$100.00 '} Dealunprice={'$120.00'} Dealdetail={'this is product'} Dealsale={'Sale'} Dealsalep={'-16%'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Midbanner };