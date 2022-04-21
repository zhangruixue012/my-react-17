function EventLoop() {
    const handleClick = () => {
        document.body.style = 'background:blue';

        setTimeout(() => {
            console.log(1);
            Promise.resolve(3).then(data => {
                console.log(data);
                document.body.style = 'background:red';
            });

        }, 100);

        setTimeout(() => {
            document.body.style = 'background:green';
            console.log(2);
        }, 200);
    }
    return(<button onClick={handleClick}>EventLoop</button>)
}

export default EventLoop;
