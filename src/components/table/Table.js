import React, { useState } from 'react';
import {
    Form,
    Input,
    DatePicker,
    ConfigProvider,
    Space,
    Row,
    Col,
} from 'antd';
import { DatePicker as DatePickerJalali, JalaliLocaleListener } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";


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
                    sm: { span: 8 },
                }}
                wrapperCol={{
                    xs: { span: 12 },
                    sm: { span: 8 },
                }}

                autoComplete="off"
                style={{ background: '#FFFFFF', borderRadius: 16, padding: 50 }}
                form={form}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >

                <Row>
                    <Col span={8}>
                        <Form.Item label='شماره قرارداد' name='contractNumber' style={{ margin: 12 }} >
                            <Input />
                        </Form.Item>
                        <Form.Item label='تاریخ قرارداد' style={{ margin: 12 }}>
                            <ConfigProvider locale={fa_IR} direction="rtl">
                                <JalaliLocaleListener />
                                <Form.Item name='contractDate'>
                                    <DatePickerJalali fa_IR />
                                </Form.Item>
                            </ConfigProvider>
                        </Form.Item>
                        <Form.Item label='نام فروشنده' name='sellerName' style={{ margin: 12 }} >
                            <Input />
                        </Form.Item>

                    </Col>



                    <Col span={8}>
                        <Form.Item label='نام خریدار' name='buyerName' style={{ margin: 12 }} >
                            <Input />
                        </Form.Item>
                        <Form.Item label='نام کالا' name='goodName' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>

                        <Form.Item label='نام برند' name='brandName' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>


                    </Col>

                    <Col span={8}>
                        <Form.Item label='مقدار کالا' name='goodCount' style={{ margin: 12 }} >
                            <Input />
                        </Form.Item>

                        <Form.Item label='ترم خرید' name='buyTerm' style={{ margin: 12 }} >
                            <Input />
                        </Form.Item>

                        <Form.Item label='بندر بارگیری' name='startPort' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8}>

                        <Form.Item label='بندر تخلیه' name='endPort' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>


                        <Form.Item label=' قیمت واحد  (FOB)' name='fobPrice' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>

                        <Form.Item label='هزینه حمل' name='transportPrice' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>

                    </Col>

                    <Col span={8}>
                        <Form.Item label=' قیمت واحد  (CFR)' name='cfrPrice' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>


                        <Form.Item label='قیمت کل' name='fobPrice' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>

                        {page === "billing" ? (<Form.Item label='شماره ثبت سفارش' name='registerbuyingNumber' style={{ margin: 12 }}>
                            <Input />
                        </Form.Item>) : ''}
                    </Col>


                </Row>



                {/* <Form.Item label="Button">
                    <Button onClick={() => {
                        console.log(form.getFieldValue('contractDate').$jy + "/" + form.getFieldValue('contractDate').$jM + "/" + form.getFieldValue('contractDate').$jD, "form is here")
                    }}>Button</Button>
                </Form.Item> */}
            </Form>
        </>
    );
};
export default Table;