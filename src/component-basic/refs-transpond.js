import React from 'react';
import FancyButton from './assistant/FancyButton';

// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//         {ref.current}
//     </button>
// ));


const ref = React.createRef();

function logProps(WrappedComponent) {


    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return LogProps;
}

export default logProps
