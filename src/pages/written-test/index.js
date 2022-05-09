import {useEffect} from "react";

function WrittenTest(props) {

    const isPrime = (num) => {

        if (num < 2) {
            return false;
        }

        for(let i=2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }

    const reverseString = (str) => {
        if (str == '') {
            return str;
        } else {
            return reverseString(str.substring(1)) + str.charAt(0)
        }
    };



    useEffect(() => {
        isPrime(8);
        console.log(reverseString('hello'));
    }, [])


    return(<div>WrittenTest</div>)
}

export default WrittenTest;