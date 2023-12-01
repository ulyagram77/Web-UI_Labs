import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import './CustomForm.css';

const CustomForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Введіть ваше ім'я!";
        }
        if (!formData.email) {
            errors.email = 'Введіть ваш e-mail!';
        } else if (
            !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
        ) {
            errors.email = 'Введіть коректний e-mail!';
        }
        if (!formData.phone) {
            errors.phone = 'Введіть ваш телефон!';
        }
        if (!formData.subject) {
            errors.subject = 'Введіть тему!';
        }
        if (!formData.message) {
            errors.message = 'Введіть повідомлення!';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            console.log('Submitted values:', formData);
        } else {
            console.log('Form has errors. Please fix them.');
        }
    };

    return (
        <Form
            layout="vertical"
            className="custom__form"
        >
            <Form.Item
                label="Ваше ім'я (обов'язково)"
                name="name"
                rules={[{ required: true, message: "Введіть ваше ім'я!" }]}
            >
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Почніть введення даних"
                />
            </Form.Item>
            <Form.Item
                label="Ваш e-mail (обов'язково)"
                name="email"
                rules={[
                    { required: true, message: 'Введіть ваш e-mail!' },
                    {
                        pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                        message: 'Введіть коректний e-mail!',
                    },
                ]}
            >
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Почніть введення даних"
                />
            </Form.Item>
            <Form.Item
                label="Ваш телефон (обов'язково)"
                name="phone"
                rules={[{ required: true, message: 'Введіть ваш телефон!' }]}
            >
                <InputMask
                    mask="+38 (999) 999-99-99"
                    maskChar=" "
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                >
                    {(inputProps) => (
                        <Input
                            {...inputProps}
                            placeholder="Почніть введення даних"
                        />
                    )}
                </InputMask>
            </Form.Item>
            <Form.Item
                label="Тема (обов'язково)"
                name="subject"
                rules={[{ required: true, message: 'Введіть тему!' }]}
            >
                <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Почніть введення даних"
                />
            </Form.Item>
            <Form.Item
                label="Повідомлення (обов'язково)"
                name="message"
                rules={[{ message: 'Введіть повідомлення!' }]}
            >
                <Input
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Почніть введення даних"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    onClick={handleFormSubmit}
                    htmlType="submit"
                >
                    Відправити
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CustomForm;
