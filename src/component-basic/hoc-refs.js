import React, {forwardRef} from 'react';

// const MyHoc = (WrapperComponent) => {
//     class LogoProps extends React.Component {
//         render() {
//             const { forwardRef, ...rest } = this.props;
//             return (
//                 <WrapperComponent {...rest} ref={forwardRef} />
//             )
//         }
//     }
//     return React.forwardRef((props, ref) => (
//         <LogoProps {...props} forwardRef={ref} />
//     ))
// }
//
// const FancyInput = React.forwardRef((props, ref) => {
//     return (
//         <input ref={ref}/>
//     )
// });
//
// export default MyHoc(FancyInput)

const Child = React.forwardRef((props, ref) => (<input ref={ref}/>));

function parent(props, ref) {
    return(<div>
        <Child ref={ref}></Child>
    </div>)
}
export default React.forwardRef(parent)
