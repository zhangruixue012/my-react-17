import React from 'react';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import RouterDetail from './pages/router-detail'
import RouterList from './pages/router-list'
import FlexLayout from "./pages/flexLayout";
import Transition from "./pages/transition";
import EventLoop from "./pages/eventLoop";
import ConcurrencyControl from "./pages/concurrency-control";
import Debounce from './pages/debounce-throttle'
import RequestAnimationFrame from './pages/requestAnimationFrame'
import './App.css';


const menuList = [
    {
        name: 'flex 布局',
        path: '/flex-layout'
    },
    {
        name: '动画',
        path: '/transition'
    },
    {
        name: 'Event Loop',
        path: '/event-loop'
    },
    {
        name: 'js并发控制',
        path: '/concurrency-control'
    },
    {
        name: '防抖和节流',
        path: '/debounce-throttle'
    },
    {
        name: 'requestAnimationFrame',
        path: '/requestAnimationFrame'
    },
];

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <div className="router-content">
                    {menuList.map(router => <Link key={router.path} to={router.path} >
                        <span className="router-link">{router.name}</span>
                    </Link>)}
                </div>
                {/*<Switch>*/}
                {/*    <Route path={'/index.js'} component={RouterIndex} ></Route>*/}
                {/*    <Route path={'/list'} component={RouterList} ></Route>*/}
                {/*    <Route path={'/detail'} component={RouterDetail} ></Route>*/}
                {/*    <Navigate from='/*' to='/index.js' />*/}
                {/*</Switch>*/}

                <Routes>
                    <Route path='/' element={<Transition />}></Route>
                    <Route path='/flex-layout' element={<FlexLayout />}></Route>
                    <Route path='/transition' element={<Transition />} ></Route>
                    <Route path='/event-loop' element={<EventLoop />} ></Route>
                    <Route path='/concurrency-control' element={<ConcurrencyControl />}></Route>
                    <Route path='/debounce-throttle' element={<Debounce />}></Route>
                    <Route path='/requestAnimationFrame' element={<RequestAnimationFrame />}></Route>
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App;
