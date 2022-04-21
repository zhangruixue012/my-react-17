

function ConcurrencyControl() {

    /**
     *
     * @param poolLimit: 限制数量
     * @param array: 数据数组
     * @param iteratorFn: 处理函数
     * @returns {Promise<Awaited<unknown>[]>}
     */
    const asyncPool = async (poolLimit, array, iteratorFn) => {
        const resultList = []; // 结果数组
        const executing = []; // 运行执行数组变量

        // 循环数据数组,包裹处理函数为 promise 对象
        for (const item of array) {
            console.log("循环", item);

            // iteratorFn == timeout
            const p = Promise.resolve().then(() => {
                console.log("初始化", item);
                return iteratorFn(item, array);
            });
            resultList.push(p); // 添加promise 对象到结果数组

            // 判断数组的长度是否小于等于限制数量
            if (poolLimit <= array.length) {
                //
                const e = p.then(() => {
                    return executing.splice(executing.indexOf(e), 1);
                });
                executing.push(e); // 被截取的
                if (executing.length >= poolLimit) {
                    console.log("运行Promise.race");
                    await Promise.race(executing);
                }
            }
        }
        return Promise.all(resultList);
    };

    // 模拟请求函数
    const timeout = (i) =>
        new Promise( (resolve) => {
            setTimeout(resolve, i, i)
        });

    const main = async () => {
        const aa = await asyncPool(
            3,
            [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000],
            timeout
        );
        console.log("aa=>", aa);
    };

    main();

    return(<div>并发控制</div>)
}

export default ConcurrencyControl;
