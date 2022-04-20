import React from 'react';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import RouterDetail from './pages/router-detail'
import RouterList from './pages/router-list'
import Index from "./pages/flexLayout";
import './App.css';


const menuList = [
    {
        name: 'flex 布局',
        path: '/flex-layout'
    },
    {
        name: '列表',
        path: '/list'
    },
    {
        name: '详情',
        path: '/detail'
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
                {/*    <Route path={'/index'} component={RouterIndex} ></Route>*/}
                {/*    <Route path={'/list'} component={RouterList} ></Route>*/}
                {/*    <Route path={'/detail'} component={RouterDetail} ></Route>*/}
                {/*    <Navigate from='/*' to='/index' />*/}
                {/*</Switch>*/}

                <Routes>
                    <Route path='/' element={<Index />}></Route>
                    <Route path='/flex-layout' element={<Index />}></Route>
                    <Route path='/list' element={<RouterList />} ></Route>
                    <Route path='/detail' element={<RouterDetail />} ></Route>
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App;
