import React, { Component, useEffect, useState, useMemo } from "react";
import { RedoOutlined } from '@ant-design/icons';

/**
 * 1. 强化 props
 */
function classHOC(WrapComponent){  // 该组件为有状态组件
    return class Index extends Component{
        state={
            name:'alien'
        }
        componentDidMount(){
            console.log('HOC')
        }
        render(){
            return <WrapComponent {...this.state} {...this.props}/>
        }
    }
}

function functionHoc(WrapComponent){   // 改组件为无状态组件
    return function Index(props){
        const [ state , setState ] = useState({ name :'baby'  })
        return  <WrapComponent { ...props }  { ...state }   />
    }
}


function Index11(props){
    console.log('props:', props);
    const { name } = props
    useEffect(()=>{
        console.log( 'index' )
    },[])
    return <div>
        hello,world , my name is { name }
    </div>
}

export default classHOC(Index11)

/**
 * 2. 抽离 state,控制更新
 *
 */
// function classHOC(WrapComponent){
//     return class  hocIndex extends Component{
//         constructor(){
//             super()
//             this.state={
//                 name:'alien'
//             }
//         }
//         changeName(name){
//             this.setState({ name })
//         }
//         render() {
//             return <WrapComponent { ...this.props }  { ...this.state } changeName={this.changeName.bind(this)  }  />
//         }
//     }
// }
//
// function Index(props){
//     const [ value ,setValue ] = useState(null)
//     const { name ,changeName } = props
//     return <div>
//         <div> hello,world , my name is { name }</div>
//         改变name
//         <input onChange={ (e)=> setValue(e.target.value)  }  />
//         <button onClick={ ()=> changeName(value) }>确定</button>
//     </div>
// }
//
// export default classHOC(Index)


/**
 * 3. 动态渲染: 对于属性代理的高阶组件，虽然不能在内部操控渲染状态，但是可以在外层控制当前组件是否渲染，这种情况应用于，权限隔离，懒加载 ，延时加载等场景
 */

// function renderHOC(WrapComponent){
//     return class HOCIdx extends Component {
//         constructor(props){
//             super(props)
//             this.state={ visible:true }
//         }
//         setVisible(){
//             this.setState({ visible:!this.state.visible })
//         }
//         render(){
//             const {  visible } = this.state
//             return <div className="box">
//                 <button onClick={ this.setVisible.bind(this) }> 挂载组件 </button>
//
//                 { visible ? <WrapComponent { ...this.props } setVisible={ this.setVisible.bind(this) }/>  :
//                     <div className="icon" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><RedoOutlined /></div> }
//             </div>
//         }
//     }
// }
//
// class Index extends Component{
//     render(){
//         const { setVisible } = this.props
//         return <div className="box" >
//             <p>hello,my name is alien</p>
//             <img  src='https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&fm=26&gp=0.jpg'   />
//             <button onClick={() => setVisible()}> 卸载当前组件 </button>
//         </div>
//     }
// }
// export default renderHOC(Index)

/**
 * 4. 分片渲染+懒加载: 实现一个懒加载功能的HOC，可以实现组件的分片渲染,用于分片渲染页面，不至于一次渲染大量组件造成白屏效果
 *
 * 大致流程，初始化的时候，HOC中将渲染真正组件的渲染函数，放入renderQueue队列中，然后初始化渲染一次，接下来，每一个项目组件，完成 didMounted 状态后，会从队列中取出下一个渲染函数，渲染下一个组件, 一直到所有的渲染任务全部执行完毕，渲染队列清空，有效的进行分片的渲染，这种方式对海量数据展示，很奏效。
 用HOC实现了条件渲染-分片渲染的功能，实际条件渲染理解起来很容易，就是通过变量，控制是否挂载组件，从而满足项目本身需求，条件渲染可以演变成很多模式，我这里介绍了条件渲染的二种方式，希望大家能够理解精髓所在
 *
 *
 */


// const renderQueue = []
// let isFirstRender = false
//
// const tryRender = ()=>{
//     const render = renderQueue.shift()
//     if(!render) return
//     setTimeout(()=>{
//         render() /* 执行下一段渲染 */
//     },1000)
// }
// /* HOC */
// function renderHOC(WrapComponent){
//     return function Index(props){
//         const [ isRender , setRender ] = useState(false)
//         useEffect(()=>{
//
//             renderQueue.push(()=>{  /* 放入待渲染队列中 */
//                 setRender(true)
//             });
//
//             console.log('renderQueue:', renderQueue);
//
//             if(!isFirstRender) {
//                 tryRender()
//                 isFirstRender = true
//             }
//         },[]);
//
//         return isRender ? <WrapComponent tryRender={tryRender} { ...props }/> : <div className='box' ><div className="icon" ></div></div>
//     }
// }
// /* 业务组件 */
// class Index extends Component{
//     componentDidMount(){
//         const { name , tryRender} = this.props
//         /* 上一部分渲染完毕，进行下一部分渲染 */
//         tryRender()
//         console.log( name+'渲染')
//     }
//     render(){
//         return <div>
//             <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg" />
//         </div>
//     }
// }
// /* 高阶组件包裹 */
// const Item = renderHOC(Index)
//
// export default () => {
//     return <React.Fragment>
//         <Item name="组件一" />
//         <Item name="组件二" />
//         <Item name="组件三" />
//     </React.Fragment>
// }

/**
 * 5. 异步组件
 */
/* 路由懒加载HOC */
// export default function AsyncRouter(loadRouter) {
//     return class Content extends Component {
//         state = {Component: null}
//         componentDidMount() {
//             if (this.state.Component) return;
//             loadRouter()
//                 .then(module => module.default)
//                 .then(Component => this.setState({Component}))
//         }
//         render() {
//             const {Component} = this.state
//             return Component ? <Component {...this.props} /> : null }
//     }
// }
//
// const Index = AsyncRouter(()=>import('../pages/index'))

/**
 * 6. 节流渲染: 节流原理
 */
// function HOC (Component){
//     return function RenderWrapComponent(props){
//         const { num } = props
//         const RenderElement = useMemo(() =>  <Component {...props}  /> ,[ num ])
//         return RenderElement
//     }
// }
//
// class Index extends React.Component {
//     render(){
//         console.log(`当前组件是否渲染`,this.props)
//         return <div>hello,world, my name is alien </div>
//     }
// }
// const IndexHoc = HOC(Index)
//
// export default ()=> {
//     const [ num ,setNumber ] = useState(0)
//     const [ num1 ,setNumber1 ] = useState(0)
//     const [ num2 ,setNumber2 ] = useState(0)
//     return <div>
//         <IndexHoc num={num} num1={num1} num2={num2}/>
//
//         <button onClick={() => setNumber(num + 1)}>num++</button>
//         <button onClick={() => setNumber1(num1 + 1)}>num1++</button>
//         <button onClick={() => setNumber2(num2 + 1)}>num2++</button>
//     </div>
// }









