import React, { useState, createContext, useEffect, useContext } from 'react';

const Create = createContext();
function Api({ Passapi }) {
    let result;
    let setsl;
    const [slideimg, setSlideimg] = useState([]);

    async function apis() {
        try {
            let Url = 'https://fakestoreapi.com/products';
            let respone = await fetch(Url)
            let result = await respone.json();
            // setSlideimg = result[9].image;
            // for (let i = 0; i < 5; i++) {
            // const element = array[i];
            setSlideimg(result[0].title)
            // }
            // setsl = () => {
            //     // setSlideimg(result[0].image
            //     //     // result[7].image,
            //     //     // result[8].image,
            //     //     // result[9].image,
            //     //     // result[10].image,
            //     //     // result[11].image,
            //     //     )
            // }
            // console.log("=====", slideimg);

            // setsl();
        }
        catch (error) {
            console.log(error, 'balle-balle,its error')
        }
    }
    useEffect(() => {

        // apis();
        console.log("inside");
    }, [])
    console.log('API',slideimg);

    // let resu, a;
    // const [UserImg, setUserImg] = useState('')
    // const [value, setvalue] = useState(0);
    // async function apis2() {
    //     try {
    //         let url = `${process.env.REACT_APP_BASE_URL}api/v1/products`;
    //         let res = await fetch(url)
    //         resu = await res.json();
    //         console.log(resu[value].images[1]);
    //         setUserImg(resu[value].images[1])
    //         // a = resu[value].images[1]
    //         setvalue(value + 1);
    //     }
    //     catch (error2) {
    //         console.log(error2, 'balle-balle,again error2')
    //     }
    // }


    // let call1api = apis();
    // console.log(call1api)
    // call1api.then((vals) => {
    //     console.log(vals)
    // }).catch(() => {
    //     console.log('eror');
    // })
    // console.log(call1api);
    // apis2();
    // console.log(UserImg);
    return (
        <>
            <div>
                {/* <Create.Provider value={{ value1: [slideimg, setSlideimg] }}> */}
                <Create.Provider value={{ slideimg, setSlideimg }}> {Passapi}
                </Create.Provider>
            </div>
            {/* <h2>{value}</h2>
            <img style={{ width: '640px', height: '640px' }} src={UserImg} alt='dfg' />
            <button onClick={apis2}>sdfghadfksgfl</button> */}
        </>
    )
}

export { Api, Create };

// export const Apisend = () => {
//     return useContext(Create);
// }