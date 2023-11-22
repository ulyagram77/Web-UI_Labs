import { useState } from 'react';
import styles from './CitiesSelect.module.css';

const CitiesSelect = ({ cities }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCityInfo, setSelectedCityInfo] = useState(null);

    const handleCityChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCity(selectedValue);

        // Находим информацию о выбранном городе
        const cityInfo = cities.find((city) => city.name === selectedValue);
        setSelectedCityInfo(cityInfo);
    };

    return (
        <>
            <select
                className={styles.cities}
                value={selectedCity}
                onChange={handleCityChange}
            >
                <option value="">Оберіть місто</option>
                {cities.map((city) => (
                    <option
                        key={city.id}
                        value={city.name}
                    >
                        {city.name}
                    </option>
                ))}
            </select>

            {selectedCityInfo && (
                <div className={styles.cityInfo}>
                    <h2>{selectedCityInfo.name}</h2>
                    <p>Країна: {selectedCityInfo.country}</p>
                    <p>Фотографія:</p>
                    <div className={styles.img}>
                        <img
                            src={selectedCityInfo.image}
                            alt="city"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CitiesSelect;
