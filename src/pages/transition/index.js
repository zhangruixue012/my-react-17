import './index.css';

function Transition() {
    return(
        <div className="demo-content">
            <div className="t-demo">
                <pre>1</pre>
                <pre>2</pre>
                <pre>3</pre>
                <pre>4</pre>
                <pre>5</pre>
            </div>

            <div className="animation-demo">
                <div className="load-border"></div>
            </div>

            <div className="transform-demo">

                <pre className="transform-chunk transform-chunk1">
                    下一步,确认订单1
                </pre>
                <pre className="transform-chunk transform-chunk2">
                    下一步,确认订单2
                </pre>
                <pre className="transform-chunk transform-chunk3">
                    下一步,确认订单3
                </pre>
                <pre className="transform-chunk transform-chunk4">
                    下一步,确认订单4
                </pre>
                <pre className="transform-chunk transform-chunk5">
                    下一步,确认订单5
                </pre>
            </div>
        </div>
        )
}

export default Transition;
