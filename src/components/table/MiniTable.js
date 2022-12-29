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
                labelCol={{
                    xs: { span: 12 },
                    sm: { span: 8 },
                }}
                wrapperCol={{
                    xs: { span: 12 },
                    sm: { span: 8 },
                }}

                autoComplete="off"
                style={{ background: '#FFFFFF', borderRadius: 8, padding: 50 }}
                form={form}
                layout="vertical"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >

                <Row>
                    <Col span={12}>
                        <Form.Item label={<div style={{ marginLeft: 100, fontWeight: 600, display: 'ruby' }}>محل تامین ارز</div>} name='currencyPlace' style={{ margin: 12 }} >
                            <Input placeholder='محل تامین ارز' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>  <Form.Item label={<div style={{ marginLeft: 127, fontWeight: 600, display: 'ruby' }}>مقدار ارز</div>} name='currencyValue' style={{ margin: 12 }} >
                        <Input placeholder='مقدار ارز' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                    </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<div style={{ marginLeft: 137, fontWeight: 600, display: 'ruby' }}>نوع ارز</div>} name='currencykind' style={{ margin: 12 }} >
                            <Input placeholder='نوع ارز' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={<div style={{ marginLeft: 130, fontWeight: 600, display: 'ruby' }}>تاریخ ارز</div>} name='currencyDate' style={{ margin: 12 }} >
                            <Input placeholder='تاریخ ارز' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};
export default Table;