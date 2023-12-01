import CustomForm from '../CustomForm/CustomForm';
import { Divider } from 'antd';
import FormNP from '../FormNP/FormNP';
import './App.css';

function App() {
    return (
        <>
            <Divider>
                <b>TASK 1</b>
            </Divider>
            <CustomForm />

            <Divider>
                <b>TASK 2</b>
            </Divider>
            <FormNP />
        </>
    );
}

export default App;
