import styles from './Table.module.css';
const Table = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>First name</b>
                        </td>
                        <td>Satoru</td>
                    </tr>
                    <tr>
                        <td>
                            <b>Last Name</b>
                        </td>
                        <td>Gojo</td>
                    </tr>
                    <tr>
                        <td>
                            <b>Occupation</b>
                        </td>
                        <td>Wizard</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Table;
