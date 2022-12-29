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
import { Row, Col } from 'antd';
import { Button } from 'antd';
import { useLocation } from "react-router-dom";

import "./MiniTable.css"

const Table = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    const [form] = Form.useForm();
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    return (
        <>
            <Form
                name="basic"
                initialValues={{ remember: false }}
                onError={(err) => {
                    console.log(err);
                }}
                labelCol={{
                    xs: { span: 12 },
                    sm: { span: 24 },
                }}
                wrapperCol={{
                    xs: { span: 12 },
                    sm: { span: 24 },
                }}

                autoComplete="off"
                style={{ background: '#FFFFFF', borderRadius: 8, padding: 20 }}
                form={form}
                layout="vertical"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >

                <Row>
                    <Form.Item label={<div style={{ marginLeft: 95, fontWeight: 600, display: 'ruby', fontSize: 12 }}>محل تامین ارز</div>} name='currencyPlace' style={{ margin: 12 }} >
                        <Input placeholder='محل تامین ارز' style={{ width: 160, height: 40, background: '#F8F8F8', fontSize: 12 }} />
                    </Form.Item>
                    <Form.Item label={<div style={{ marginLeft: 124, fontWeight: 600, display: 'ruby', fontSize: 12 }}>مقدار ارز</div>} name='currencyValue' style={{ margin: 12 }} >
                        <Input placeholder='مقدار ارز' style={{ width: 160, height: 40, background: '#F8F8F8', fontSize: 12 }} />
                    </Form.Item></Row>

                <Row>
                    <Form.Item label={<div style={{ marginLeft: 135, fontWeight: 600, display: 'ruby', fontSize: 12 }}>نوع ارز</div>} name='currencykind' style={{ margin: 12 }} >
                        <Input placeholder='نوع ارز' style={{ width: 160, height: 40, background: '#F8F8F8', fontSize: 12 }} />
                    </Form.Item>
                    <Form.Item label={<div style={{ marginLeft: 125, fontWeight: 600, display: 'ruby', fontSize: 12 }}>تاریخ ارز</div>} name='currencyDate' style={{ margin: 12 }} >
                        <Input placeholder='تاریخ ارز' style={{ width: 160, height: 40, background: '#F8F8F8', fontSize: 12 }} />
                    </Form.Item>
                </Row>
                <Form.Item>
                    <Button style={{ marginRight: 100, marginTop: 16, width: 160, fontSize: 12, fontWeight: 600, color: 'white', borderColor: '#0095E8', background: '#0095E8' }} primary blue onClick={() => {
                        console.log(form.getFieldValue("usersss"), "dasasd")
                    }}>  {page === "billing" ? "اضافه کردن پرفرما" : "اضافه کردن قرارداد"}</Button>
                </Form.Item>

            </Form>
        </>
    );
};
export default Table;