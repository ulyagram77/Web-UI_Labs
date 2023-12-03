import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BasketIcon from './Assets/basket-icon.svg';
import DefaultLikeBtn from './Assets/default-like-btn.svg';
import LikedLikeBtn from './Assets/liked-like-btn.png';
import LikedItems from './Components/LikedItems/LikedItems';
import Comparison from './Assets/comparison.svg';

const Notification = (props) => {
    return (
        <div className='notification'>
            {props.data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </div>
    );
};

function App() {
    const [data, setData] = useState(null);
    const [selectedSortOption, setSelectedSortOption] = useState('');
    const basketIconRef = useRef(null);
    const [likedProducts, setLikedProducts] = useState([]);
    const [isLikedItemsWindowOpen, setIsLikedItemsWindowOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [comparisonObjects, setComparisonObjects] = useState([]);
    const [result, setResult] = useState([]);

    const fetchData = (url) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error(
                    'There was a problem with the fetch operation:',
                    error,
                );
            });
    };

    const changeSortValueHandler = (event) => {
        const selectedValue = event.target.value;
        setSelectedSortOption(selectedValue);

        if (selectedValue === 'Від дешевших до дорогих') {
            setData(data.slice().sort((a, b) => a.price - b.price));
        } else if (selectedValue === 'Від дорогих до дешевих') {
            setData(data.slice().sort((a, b) => b.price - a.price));
        }
    };

    const clickCartHandler = () => {
        basketIconRef.current.focus();
    };

    const likeProductHandler = (event) => {
        event.stopPropagation();
        const newItem = event.currentTarget.id;
        setLikedProducts((prevLikedProducts) => [
            ...prevLikedProducts,
            newItem,
        ]);
    };

    const openLikedItemsWindow = () => {
        likedProducts.forEach((id) => {
            const findObject = data.find((item) => item.id == id);
            localStorage.setItem(findObject.id, JSON.stringify(findObject));
        });
        setIsLikedItemsWindowOpen(true);
    };

    const handleComparisonIconClick = () => {
        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const addToComparisonHandler = (event) => {
        event.stopPropagation();

        const newItem = event.currentTarget.id;
        setComparisonObjects((prevLikedProducts) => [
            ...prevLikedProducts,
            newItem,
        ]);

        comparisonObjects.forEach((id) => {
            const findObject = data.find((item) => item.id == id);
            setResult((prevLikedProducts) => [
                ...prevLikedProducts,
                findObject,
            ]);
        });
    };

    useEffect(() => {
        fetchData('https://fakestoreapi.com/products');
    }, []);

    return (
        <div className='App'>
            {showNotification &&
                ReactDOM.createPortal(
                    <Notification data={result} />,
                    document.body,
                )}
            <div className='carts'>
                {data != null ? (
                    data.map((cart) => {
                        return (
                            <div
                                className='cart'
                                onClick={clickCartHandler}
                            >
                                {likedProducts.length > 0 ? (
                                    likedProducts.map((product) => {
                                        if (product.id === cart.id) {
                                            return (
                                                <img
                                                    src={LikedLikeBtn}
                                                    alt=''
                                                    className='cart__likeBtn'
                                                />
                                            );
                                        } else {
                                            return (
                                                <img
                                                    src={DefaultLikeBtn}
                                                    alt=''
                                                    id={cart.id}
                                                    className='cart__likeBtn'
                                                    onClick={likeProductHandler}
                                                />
                                            );
                                        }
                                    })
                                ) : (
                                    <img
                                        src={DefaultLikeBtn}
                                        alt=''
                                        id={cart.id}
                                        className='cart__likeBtn'
                                        onClick={likeProductHandler}
                                    />
                                )}
                                <img
                                    src={Comparison}
                                    alt=''
                                    id={cart.id}
                                    className='cart__comparisonBtn'
                                    onClick={addToComparisonHandler}
                                />
                                <img
                                    src={cart.image}
                                    alt=''
                                    className='cart__mainPhoto'
                                />{' '}
                                <p className='cart__title'>{cart.title}</p>
                                <p className='cart__price'>{cart.price} грн</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className='filters'>
                <div className='filters__header'>
                    <h4 className='filters__title'>Сортувати</h4>
                    <div className='filters__itemButtons'>
                        {isLikedItemsWindowOpen === true ? (
                            <LikedItems /> // data={likedProductsObject}
                        ) : null}
                        <img
                            className='filters__basketIcon'
                            src={DefaultLikeBtn}
                            alt=''
                            onClick={openLikedItemsWindow}
                        />
                        <img
                            className='filters__basketIcon'
                            src={BasketIcon}
                            ref={basketIconRef}
                            tabIndex={0}
                            role='button'
                            alt=''
                        />
                        <img
                            className='filters__basketIcon'
                            src={Comparison}
                            alt=''
                            onClick={handleComparisonIconClick}
                        />
                    </div>
                </div>
                <select
                    className='filters__sort'
                    onChange={changeSortValueHandler}
                    value={selectedSortOption}
                >
                    <option value=''></option>
                    <option value='Від дешевших до дорогих'>
                        Від дешевших до дорогих
                    </option>
                    <option value='Від дорогих до дешевих'>
                        Від дорогих до дешевих
                    </option>
                </select>
            </div>
        </div>
    );
}

export default App;
