import {useEffect} from "react";

function RequestAnimationFrame() {

    // const repeat = (func, times, wait) => {
    //     let num = 0;
    //     return (msg) => {
    //         const interval = setInterval(()=> {
    //             if (num > times) {
    //                 clearInterval(interval);
    //             } else {
    //                 num += 1;
    //                 func(msg);
    //             }
    //
    //         }, wait);
    //     }
    // }
    //
    // const repeatAlert = repeat(window.alert, 4, 3000);
    // useEffect(() => {
    //     // repeatAlert('hello word');
    // }, [])

    return(<div>渲染优化</div>)
};

export default RequestAnimationFrame


