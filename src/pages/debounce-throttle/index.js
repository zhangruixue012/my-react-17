// 防抖
// function Debounce() {
//
//
//     const request = (e) => {
//         console.log("执行了真正的要做的方法");
//     }
//
//
//     const debounce = (fn, delay) => {
//
//         let timeout;
//         return function(){
//             console.log('timeout 清理前:', timeout);
//
//             clearTimeout(timeout)
//
//             // console.log('timeout 清理后:', timeout);
//
//             timeout = setTimeout(()=>{
//                 fn.apply(this, arguments)
//             }, delay)
//             // console.log('timeout重新设置后:', timeout);
//         }
//     }
//
//
//     const keyUp = debounce(request, 500);
//
//
//
//     return(<div>
//         防抖:
//         <input id='input' onKeyUp={keyUp}/>
//     </div>)
//
// }
//
// export default Debounce;

// 节流

function Throttle(fn, delay) {

    // const throttle = () => {
    //     let timer;
    //     return function () {
    //         const _this = this;
    //         const args = arguments;
    //         if (timer) {
    //             return;
    //         }
    //         timer = setTimeout(function () {
    //             fn.apply(_this, args);
    //             timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    //         }, delay)
    //     }
    // }

    const throttle = (fn, delay) => {
        let timer;
        return function(){
            if(!timer) {
                fn.apply(this, arguments)
                timer = setTimeout(()=>{
                    clearTimeout(timer)
                    timer = null
                }, delay)
            }
        }
    }

    const request = (e) => {
        console.log('执行真正的方法');
    }

    const keyUp = throttle(request, 10000)


    return(<div>
        节流: <input id='input' onKeyUp={keyUp}/>
    </div>)

}

export default Throttle;
