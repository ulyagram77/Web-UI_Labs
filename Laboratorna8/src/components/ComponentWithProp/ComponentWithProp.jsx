import styles from './ComponentWithProp.module.css';

const ComponentWithProp = (props) => {
    const {
        brand,
        model,
        processor,
        RAM,
        graphicsCard,
        operatingSystem,
        isLaptop,
    } = props.productData;

    return (
        <div className={styles.product}>
            <h2>
                {brand} {model}
            </h2>
            <p>
                <strong>Processor:</strong> {processor}
            </p>
            <p>
                <strong>RAM:</strong> {RAM}
            </p>
            <p>
                <strong>Graphics Card:</strong> {graphicsCard}
            </p>
            <p>
                <strong>Operating System:</strong> {operatingSystem}
            </p>
            <p>
                <strong>Type:</strong> {isLaptop ? 'Laptop' : 'Desktop'}
            </p>
        </div>
    );
};

export default ComponentWithProp;
