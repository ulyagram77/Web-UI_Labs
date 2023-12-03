import React from 'react';
import style from './LikedItems.module.css';

const LikedItems = (props) => {
    const keys = Object.keys(localStorage);

    const arrayOfObjects = [];

    keys.forEach((key) => {
        const valueString = localStorage.getItem(key);
        const valueObject = JSON.parse(valueString);
        arrayOfObjects.push(valueObject);
    });

    return (
        <div className={style.window}>
            <header className={style.window__header}>
                <button>X</button>
            </header>
            <div className={style.window__data}>
                {arrayOfObjects.map((item) => {
                    return (
                        <div className={style.window__data__item}>
                            <img
                                className={style.window__data__item__photo}
                                src={item.image}
                                alt=''
                            />
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LikedItems;
