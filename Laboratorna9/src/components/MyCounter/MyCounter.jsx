import { useState } from 'react';
import { Button, Flex } from 'antd';
import styles from './MyCounter.module.css';

const MyCounter = (props) => {
    const {
        initial = 0,
        min = Number.MIN_SAFE_INTEGER,
        max = Number.MAX_SAFE_INTEGER,
    } = props;

    const [count, setCount] = useState(initial);

    const handlePlusClick = () => {
        if (count < max) {
            setCount(count + 1);
        }
    };

    const handleMinusClick = () => {
        if (count > min) {
            setCount(count - 1);
        }
    };

    const handleResetClick = () => {
        setCount(0);
    };

    return (
        <Flex
            gap="small"
            wrap="wrap"
            align="center"
            className={styles.counter}
        >
            <div className={styles.result}>
                Поточний рахунок: <b>{count}</b>
            </div>

            <Button
                onClick={handlePlusClick}
                className={styles.btn}
                type="primary"
                ghost
                data-operation="increment"
            >
                +
            </Button>
            <Button
                onClick={handleMinusClick}
                className={styles.btn}
                type="primary"
                ghost
                data-operation="decrement"
            >
                -
            </Button>
            <Button
                onClick={handleResetClick}
                className={styles.btn}
                type="primary"
                ghost
                data-operation="reset"
            >
                Reset
            </Button>
        </Flex>
    );
};

export default MyCounter;
