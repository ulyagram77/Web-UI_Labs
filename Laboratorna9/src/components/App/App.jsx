import MyCounter from '../MyCounter/MyCounter';
import CounterList from '../CounterList/CounterList';
import { ConfigProvider, Divider } from 'antd';
import './App.css';

const theme = {
    // другие настройки темы...
    token: {
        // Seed Token
        colorPrimary: '#3DB0E3',
        borderRadius: 2,
        colorPrimaryHover: '#3E72FF',
    },
};

const counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 },
];

function App() {
    return (
        <>
            <ConfigProvider theme={theme}>
                <Divider>
                    <b>TASK 1</b>
                </Divider>
                <MyCounter />
                <Divider>
                    <b>TASK 1.2</b>
                </Divider>
                <CounterList countersData={counters} />
                <Divider>
                    <b>TASK 2</b>
                </Divider>
            </ConfigProvider>
        </>
    );
}

export default App;
