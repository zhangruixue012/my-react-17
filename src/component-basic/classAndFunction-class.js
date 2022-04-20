// import React, { Component } from "react";
//
// class ClassAndFunctionComponent extends Component {
//     constructor() {
//         super();
//         this.state = {
//             inpValue: ""
//         };
//     }
//
//     // 根据 this 可变性, 类组件原本拿到的是最新的值
//     showInpValue1() {
//         setTimeout(() => {
//             alert(this.state.inpValue);
//         }, 3000);
//     }
//
//     render() {
//         const { inpValue } = this.state;
//         console.log(inpValue);
//
//         // 利用闭包让类组件拿到点击时的值
//         const showInpValue = () => {
//             setTimeout(() => {
//                 alert(inpValue);
//             }, 3000);
//         };
//
//         return (
//             <div>
//                 <span> 我是类组件 </span>
//                 <input
//                     type="text"
//                     value={inpValue}
//                     onChange={(e) => {
//                         this.setState({ inpValue: e.target.value });
//                     }}
//                 />
//                 <button
//                     onClick={() => {
//                         showInpValue();
//                     }}
//                 >
//                     3s后弹出自己input的值
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default ClassAndFunctionComponent;
