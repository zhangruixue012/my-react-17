import React, { useState, useRef, useEffect, useLayoutEffect, useReducer, useMemo, useCallback } from "react";

/**
 * useState
 */
// function DemoState(props) {
//     /* number为此时state读取值 ，setNumber为派发更新的函数 */
//     let [number, setNumber] = useState(0) /* 0为初始值 */
//     return (<div>
//         <span>{ number }</span>
//         <button onClick={ ()=> {
//             setNumber(number+1)
//             console.log(number) /* 这里的number是不能够即使改变的  */
//         } } >testUseState</button>
//     </div>)
// }


// const a =1
// function DemoState(props) {
//     /*  useState 第一个参数如果是函数 则处理复杂的逻辑 ，返回值为初始值 */
//     let [number, setNumber] = useState(()=>{
//         // number
//         return a===1 ? 10 : 2
//     }) /* 1为初始值 */
//     return (<div>
//         <span>{ number }</span>
//         <button onClick={ ()=> { setNumber(number+1);console.log(number) } }>testUseState</button>
//     </div>)
// }

/**
 * useEffect: 依赖更新
 */

/* 模拟数据交互 */
// function getUserInfo(a){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({
//                 name: 'a',
//                 age: 16,
//             })
//         },500)
//     })
// }
//
// function Demo({ a }) {
//     const [ userMessage , setUserMessage ] = useState({})
//     const div= useRef()
//     const [number, setNumber] = useState(0)
//     /* 模拟事件监听处理函数 */
//     const handleResize =()=>{}
//     /* useEffect使用 ，这里如果不加限制 ，会是函数重复执行，陷入死循环*/
//
//     useEffect(()=>{
//         /* 请求数据 */
//         getUserInfo(a).then(res=>{
//             setUserMessage(res);
//             console.log('res:', res);
//         })
//
//         /* 操作dom  */
//         console.log(div.current) /* div */
//
//         /* 事件监听等 */
//         window.addEventListener('resize', handleResize)
//         /* 只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount */
//     },[ a ,number ]);
//
//     return (<div ref={div}>
//         <span>{ userMessage.name }</span>
//         <span>{ userMessage.age }</span>
//         <div style={{ border: '1px solid #f00', width: '200px', height: '200px' }} onClick={ ()=> setNumber(1) } >{ number }</div>
//     </div>)
// }


/**
 * useEffect: 在组件销毁的阶段做一些取消 dom 监听,清除定时器等, 相当于 componentWillUnmount
 *
 */
// function Demo({ a }) {
//     /* 模拟事件监听处理函数 */
//     const handleResize =()=>{}
//
//     useEffect(()=>{
//         /* 定时器 延时器等 */
//         const timer = setInterval(()=>console.log(666),1000)
//
//         /* 事件监听 */
//         window.addEventListener('resize', handleResize)
//
//         /* 此函数用于清除副作用 */
//         return function(){
//             clearInterval(timer)
//             window.removeEventListener('resize', handleResize)
//         }
//     },[a]);
//
//     return (<div>Demo</div>)
// }


/**
 * useEffect 中使用 async
 *
 */

// const asyncEffect = (callback, deps)=>{
//     useEffect(()=>{
//         callback()
//     }, deps)
// }

/**
 * UseLayoutEffect
 */
//
// const Demo = () => {
//     const target = useRef()
//     useLayoutEffect(() => {
//
//         /*我们需要在dom绘制之前，移动dom到制定位置*/
//         const { x ,y } = getPositon() /* 获取要移动的 x,y坐标 */
//         animate(target.current,{ x,y })
//
//     }, []);
//
//     return (
//         <div >
//             <span ref={ target } className="animate"></span>
//         </div>
//     )
// }

/**
 * UseRef: 获取元素, 缓存数据
 */


// const DemoUseRef = ()=>{
//     const dom= useRef(null)
//
//     const handleSubmit = ()=>{
//         /*  <div >表单组件</div>  dom 节点 */
//         console.log(dom.current)
//     }
//     return <div>
//         {/* ref 标记当前dom节点 */}
//         <div ref={dom} >表单组件</div>
//         <button onClick={()=>handleSubmit()} >提交</button>
//     </div>
// }


/**
 * UseContext
 */

// /* 用useContext方式 */
// const DemoContext = ()=> {
//     const value = useContext(Context)
//     /* my name is alien */
//     return <div> my name is { value.name }</div>
// }
//
// /* 用Context.Consumer 方式 */
// const DemoContext1 = ()=>{
//     return <Context.Consumer>
//         {/*  my name is alien  */}
//         { (value)=> <div> my name is { value.name }</div> }
//     </Context.Consumer>
// }
//
// export default ()=>{
//     return <div>
//         <Context.Provider value={{ name:'alien' , age:18 }} >
//             <DemoContext />
//             <DemoContext1 />
//         </Context.Provider>
//     </div>
// }

/**
 * useReducer
 */

function Demo(){

    const MyChildren = ({ dispatch, State }) => {
        const { number } = State;

        const dispatchChildValue = () => {
            dispatch({ name:'reset' ,payload: 100 })
        }

        return(<div style={{ width: '100px', height: '100px', border: '2px solid #f00', marginTop: '20px' }}>
            子组件:{number}
            <button onClick={dispatchChildValue}>子组件中 dispatch</button>
        </div>)
    }

    /* number为更新后的state值,  dispatchNumber 为当前的派发函数 */
    const [ number , dispatchNumber ] = useReducer((state, action)=>{
        const { payload , name  } = action
        /* return的值为新的state */
        switch(name){
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            case 'reset':
                return payload
        }
        return state
    },0);

    return <div>
        当前值：{ number }
        { /* 派发更新 */ }
        <button onClick={()=>dispatchNumber({ name:'add' })} >增加</button>
        <button onClick={()=>dispatchNumber({ name:'sub' })} >减少</button>
        <button onClick={()=>dispatchNumber({ name:'reset' ,payload:666 })} >赋值</button>

        { /* 把dispatch 和 state 传递给子组件  */ }
        <MyChildren  dispatch={dispatchNumber} State={{ number }} />
    </div>



}

/**
 * useMemo
 */

// const renderList = useMemo(() => (
//     <Modal
//         width={'70%'}
//         visible={listshow}
//         footer={[
//             <button key="back" >取消</button>,
//             <button key="submit" type="primary">确定</button>
//         ]}
//     >
//         { /* 减少了PatentTable组件的渲染 */ }
//         <PatentTable
//             getList={getList}
//             selectList={selectList}
//             cacheSelectList={cacheSelectList}
//             setCacheSelectList={setCacheSelectList} />
//     </Modal>
// ), [listshow, cacheSelectList])

// const Demo = ()=> {
//     const [ number ,setNumber ] = useState(0);
//
//     const newLog = useMemo(() =>{
//         return (<div>useMemo 中的 number: { number }</div>)
//     },[]);
//
//     return <div>
//         <div style={{ width: '100px', height: '100px', border: '2px solid #f00', margin: '10px' }}>
//             {newLog}
//         </div>
//
//         <div style={{ width: '100px', height: '100px', border: '2px solid #f00', margin: '10px' }}>{number}</div>
//
//         <span onClick={()=> setNumber( number + 1 )  }>增加</span>
//     </div>
// }

/**
 * useCallback
 */

// /* 用react.memo */
// const DemoChildren = React.memo((props)=>{
//     /* 只有初始化的时候打印了 子组件更新 */
//     console.log('子组件更新')
//     useEffect(()=>{
//         props.getInfo('子组件')
//     },[])
//     return <div>子组件</div>
// })
//
// const Demo=({ id })=>{
//     const [number, setNumber] = useState(1);
//
//     /* 此时usecallback的第一参数 (sonName)=>{ console.log(sonName) }
//      经过处理赋值给 getInfo */
//     const getInfo  = useCallback((sonName)=>{
//         console.log(sonName);
//     },[id]);
//
//     return <div>
//         {/* 点击按钮触发父组件更新 ，但是子组件没有更新 */}
//         <button onClick={ () => setNumber(number+1) } >增加</button>
//         <DemoChildren getInfo={getInfo} />
//     </div>
// }

/**
 * UseState 与 UseReducer
 */

// function Demo() {
//     const preferDarkQuery = '(prefers-color-scheme: dark)';
//
//     const [mode, setMode] = React.useState(() => window.localStorage.getItem('colorMode') || (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'),)
//
//     React.useEffect(() => {
//         const mediaQuery = window.matchMedia(preferDarkQuery)
//         const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light')
//         mediaQuery.addListener(handleChange)
//         return () => mediaQuery.removeListener(handleChange)
//     }, [])
//
//     React.useEffect(() => {
//         window.localStorage.setItem('colorMode', mode)
//     }, [mode]);
//
//     return [mode, setMode]
// }
//
//
// function useDarkMode() {
//     const preferDarkQuery = '(prefers-color-scheme: dark)'
//
//     const [mode, setMode] = React.useReducer(
//         (prevMode, nextMode) =>
//             typeof nextMode === 'function' ? nextMode(prevMode) : nextMode,
//         'light',
//         () =>
//             window.localStorage.getItem('colorMode') ||
//             (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'),
//     );
//
//     React.useEffect(() => {
//         const mediaQuery = window.matchMedia(preferDarkQuery)
//         const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light')
//         mediaQuery.addListener(handleChange)
//         return () => mediaQuery.removeListener(handleChange)
//     }, [])
//
//
//     React.useEffect(() => {
//         window.localStorage.setItem('colorMode', mode)
//     }, [mode])
//
//     return [mode, setMode]
// }

export default Demo;
