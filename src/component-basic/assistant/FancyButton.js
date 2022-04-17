class FancyButton extends React.Component {
    focus() {
        // ...
    }

    // ...
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);
