import style from './index.module.scss';

function GridLayout() {



    const aa = () => {
        const aa = {
            tag:'ul',  // 元素的标签类型
            attrs:{  //  表示指定元素身上的属性
                id:'list'
            },
            children:[  // ul元素的子节点
                {
                    tag: 'li',
                    attrs:{
                        className:'item'
                    },
                    children:['itemA']
                },
                {   tag: 'li',
                    attrs:{
                        className:'item'
                    },
                    children:['itemB']
                }
            ]
        }
    }


        return(<div className={style.container}>
        <div className={style.child}>1</div>
        <div className={style.child1}><span>22222222222</span></div>
        <div className={style.child}>3</div>
        <div className={style.child}>4</div>
        <div className={style.child}>5</div>
    </div>)

}
export default GridLayout;