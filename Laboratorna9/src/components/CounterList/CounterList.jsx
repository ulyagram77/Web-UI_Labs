import MyCounter from '../MyCounter/MyCounter';

const CounterList = ({ countersData }) => {
    return (
        <div>
            {countersData.map((counter) => (
                <MyCounter
                    key={counter.id}
                    id={counter.id}
                    initial={counter.initial}
                    min={counter.min}
                    max={counter.max}
                />
            ))}
        </div>
    );
};

export default CounterList;
