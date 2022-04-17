import React, { useState, useRef, useEffect } from "react";

export default function ClassAndFunctionComponent(props) {

    const [inpValue, setInpValue] = useState("");
    const inpValueRef = useRef();

    useEffect(() => {
        inpValueRef.current = inpValue;
    }, [inpValue]);

    const showInpValue = () => {
        setTimeout(() => {
            alert(inpValue);
        }, 3000);
    };

    const showInpValue1 = () => {
        setTimeout(() => {
            alert(inpValueRef.current);
        }, 3000);
    };

    return (
        <div>
            <span> 我是函数组件 </span>
            <input
                type="text"
                value={inpValue}
                onChange={(e) => {
                    setInpValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    showInpValue1();
                }}
            >
                3s后弹出自己input的值
            </button>
        </div>
    );
}
