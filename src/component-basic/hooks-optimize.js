import React, { useState, useCallback, useMemo, memo, useEffect } from "react";

// const Child = memo((props) => {
//     console.log("Child渲染");
//     const { stu, sayHi } = props;
//     const { name } = stu;
//
//     useEffect(() => {
//         sayHi(name);
//     }, [name, sayHi]);
//
//     return (
//         <div>
//             <span>我是子组件 name: {name}</span>
//         </div>
//     );
// });

const Child = (props) => {
    console.log("Child渲染");
    const { stu, sayHi } = props;
    const { name } = stu;

    useEffect(() => {
        sayHi(name);
    }, [name, sayHi]);

    return (
        <div>
            <span>我是子组件 name: {name}</span>
        </div>
    );
}

export default function HooksOptimize() {

    const [count, setCount] = useState(0);
    // const stu = useMemo(() => ({ name: "张三" }), []);

    // const sayHi = useCallback((name) => {
    //     console.log(`你好${name}`);
    // }, []);


    const stu1 = useMemo(() => ({ name: "张三" }), []);

    const sayHi1 = (name) => {
        console.log(`你好${name}`);
    }

    return (
        <div className="App">
            count: {count}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                点我增加count
            </button>
            <Child stu={stu1} sayHi={sayHi1} />
        </div>
    );
}
