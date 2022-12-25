import React, { useState } from 'react';
import {
    Form,
    Input,
    DatePicker,
    ConfigProvider,
    Space,
} from 'antd';
import { DatePicker as DatePickerJalali, JalaliLocaleListener } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";

const Table = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    const [form] = Form.useForm();

    return (
        <>
            <Form
                name="basic"
                initialValues={{ remember: false }}
                onError={(err) => {
                    console.log(err);
                }}
                autoComplete="off"
                style={{ background: '#FFFFFF', borderRadius: 16, padding: 50 }}
                form={form}

                layout="inline"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Form.Item label='محل تامین ارز' name='currencyPlace' style={{ margin: 12 }} >
                    <Input />
                </Form.Item>
                <Form.Item label='مقدار ارز' name='currencyValue' style={{ margin: 12 }} >
                    <Input />
                </Form.Item>
                <Form.Item label='نوع ارز' name='currencykind' style={{ margin: 12 }} >
                    <Input />
                </Form.Item>
                <Form.Item label=' تاریخ ارز' name='currencyDate' style={{ margin: 12 }} >
                    <Input />
                </Form.Item>


            </Form>
        </>
    );
};
export default Table;