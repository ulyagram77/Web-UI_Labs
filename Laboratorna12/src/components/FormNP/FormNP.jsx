import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FormItem } from 'react-hook-form-antd';
import * as yup from 'yup';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
    Flex,
    Typography,
    Divider,
    ConfigProvider,
} from 'antd';

import './FormNP.css';

const formTheme = {
    components: {
        Form: {
            labelFontSize: 10,
            itemMarginBottom: 0,
        },
    },
};

const validationSchema = yup.object().shape({
    recipientСity: yup.string().required("Обов'язкове поле"),
    sendingCity: yup.string().required("Обов'язкове поле"),
    shipType: yup.string().required("Обов'язкове поле"),

    announcedCost1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Оголошена вартість має бути не менше 0'),
    amount1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Кількість має бути не менше 0'),
    weight1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Вага має бути не менше 0'),

    length1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Кількість має бути не менше 0'),
    width1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Оголошена вартість має бути не менше 0'),
    height1: yup
        .number()
        .required("Обов'язкове поле")
        .min(0, 'Вага має бути не менше 0'),
    stages: yup.number().required("Обов'язкове поле"),
});

const FormNP = () => {
    const { control, handleSubmit, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const [places, setPlaces] = useState([{ id: 1 }]);

    const addPlace = () => {
        const newPlace = {
            id: places.length + 1,
        };
        setPlaces([...places, newPlace]);
    };

    const handleCheckboxChange = (e) => {
        setValue('isDelivery', e.target.checked);
    };

    const handleInputChange = (placeId, field, value) => {
        const updatedPlaces = places.map((place) => {
            if (place.id === placeId) {
                return { ...place, [field]: value };
            }
            return place;
        });
        setPlaces(updatedPlaces);
    };

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <ConfigProvider theme={formTheme}>
                <Form
                    className="form__np"
                    onFinish={handleSubmit(onSubmit)}
                    layout="vertical"
                >
                    <Flex
                        component="div"
                        justify="space-between"
                        align="center"
                    >
                        <Typography.Text>Маршрут: </Typography.Text>

                        <FormItem
                            control={control}
                            name="recipientСity"
                        >
                            <Select
                                style={{
                                    width: '200px',
                                    verticalAlign: 'middle',
                                }}
                                options={[
                                    {
                                        value: 'mariupol',
                                        label: 'Mariupol',
                                    },
                                    {
                                        value: 'kharkiv',
                                        label: 'Kharkiv',
                                    },
                                    {
                                        value: 'kyiv',
                                        label: 'Kyiv',
                                    },
                                    {
                                        value: 'odessa',
                                        label: 'Odessa',
                                    },
                                ]}
                            />
                        </FormItem>

                        <FormItem
                            control={control}
                            name="sendingCity"
                        >
                            <Select
                                style={{ width: '200px' }}
                                options={[
                                    {
                                        value: 'mariupol',
                                        label: 'Mariupol',
                                    },
                                    {
                                        value: 'kharkiv',
                                        label: 'Kharkiv',
                                    },
                                    {
                                        value: 'kyiv',
                                        label: 'Kyiv',
                                    },
                                    {
                                        value: 'odessa',
                                        label: 'Odessa',
                                    },
                                ]}
                            />
                        </FormItem>
                    </Flex>

                    <Divider />

                    <Flex
                        component="div"
                        align="center"
                        gap={70}
                    >
                        <Typography.Text>Вид відправлення: </Typography.Text>
                        <FormItem
                            style={{ margin: 0 }}
                            control={control}
                            name="shipType"
                        >
                            <Select
                                style={{ width: '200px' }}
                                options={[
                                    {
                                        value: 'package',
                                        label: 'Посилки',
                                    },
                                    {
                                        value: 'cargo',
                                        label: 'Вантажі',
                                    },
                                    {
                                        value: 'documents',
                                        label: 'Документи',
                                    },
                                    {
                                        value: 'wheels',
                                        label: 'Шини та диски',
                                    },
                                    {
                                        value: 'pallets',
                                        label: 'Палети',
                                    },
                                ]}
                            />
                        </FormItem>
                    </Flex>

                    <Divider />
                    <Flex vertical>
                        <Typography.Text>
                            Характеристика місць:{' '}
                        </Typography.Text>
                        {places.map((place) => (
                            <Flex
                                key={place.id}
                                justify="space-around"
                                style={{ margin: '20px 0px 20px 0px' }}
                                className="item"
                            >
                                <Flex
                                    align="flex-end"
                                    justify="space-between"
                                    style={{ width: '210px' }}
                                >
                                    <FormItem
                                        control={control}
                                        name={`amount${place.id}`}
                                        label="Кількість"
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'amount',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>

                                    <FormItem
                                        control={control}
                                        name={`announcedCost${place.id}`}
                                        label={
                                            <span>
                                                Оголошена
                                                <br />
                                                вартість
                                            </span>
                                        }
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'announcedCost',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>

                                    <FormItem
                                        control={control}
                                        name={`weight${place.id}`}
                                        label="Вага"
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'weight',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>
                                </Flex>

                                <Flex
                                    align="flex-end"
                                    justify="space-between"
                                    style={{ width: '210px' }}
                                >
                                    <FormItem
                                        control={control}
                                        name={`length${place.id}`}
                                        label="Довжина"
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'length',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>

                                    <FormItem
                                        control={control}
                                        name={`width${place.id}`}
                                        label="Ширина"
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'width',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>

                                    <FormItem
                                        control={control}
                                        name={`height${place.id}`}
                                        label="Висота"
                                    >
                                        <Input
                                            type="number"
                                            className="user__input"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    place.id,
                                                    'height',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </FormItem>
                                </Flex>
                            </Flex>
                        ))}
                        <Typography.Link onClick={addPlace}>
                            Додати місце
                        </Typography.Link>
                    </Flex>

                    <Divider />

                    <Flex
                        align="flex-end"
                        justify="space-between"
                        style={{ marginBottom: '30px' }}
                    >
                        <Typography.Text>
                            Послуга "Підйом на поверх"
                        </Typography.Text>
                        <FormItem
                            control={control}
                            name="stages"
                            label="Кількість поверхів"
                        >
                            <Input />
                        </FormItem>
                        <FormItem
                            control={control}
                            name="isElevator"
                            valuePropName="checked"
                        >
                            <Checkbox>Ліфт</Checkbox>
                        </FormItem>
                    </Flex>

                    <Flex
                        align="flex-end"
                        justify="space-between"
                        style={{ marginBottom: '30px' }}
                    >
                        <Typography.Text>
                            Послуга "Зворотна доставка"
                        </Typography.Text>
                        <FormItem
                            control={control}
                            name="isDelivery"
                            valuePropName="checked"
                        >
                            <Checkbox
                                onChange={handleCheckboxChange}
                            ></Checkbox>
                        </FormItem>
                    </Flex>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Реалізувати
                        </Button>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </>
    );
};

export default FormNP;
