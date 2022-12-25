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
                style={{ background: '#FFFFFF', borderRadius: 8, padding: 50 }}
                form={form}
                layout="vertical"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >

                <Row>
                    <Col span={8}>
                        <Form.Item label={<div style={{ marginLeft: 59, fontWeight: 600 }}>شماره قرارداد</div>} name='contractNumber' style={{ margin: 12 }} >
                            <Input placeholder='شماره قرارداد' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                        <ConfigProvider locale={fa_IR} direction="rtl">
                            <JalaliLocaleListener />
                            <Form.Item name='contractDate' label={<div style={{ marginLeft: 65, fontWeight: 600 }}>تاریخ قرارداد</div>} style={{ margin: 12 }}>
                                <DatePickerJalali placeholder='تاریخ قرارداد' fa_IR style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                            </Form.Item>
                        </ConfigProvider>
                        <Form.Item label={<div style={{ marginLeft: 65, fontWeight: 600 }}>نام فروشنده</div>} name='sellerName' style={{ margin: 12 }} >
                            <Input placeholder='نام فروشنده' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                    </Col>



                    <Col span={8}>
                        <Form.Item label={<div style={{ marginLeft: 75, fontWeight: 600 }}>نام خریدار</div>} name='buyerName' style={{ margin: 12 }} >
                            <Input placeholder='نام خریدار' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                        <Form.Item label={<div style={{ marginLeft: 92, fontWeight: 600 }}>نام کالا</div>} name='goodName' style={{ margin: 12 }}>
                            <Input placeholder='نام کالا' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                        <Form.Item label={<div style={{ marginLeft: 89, fontWeight: 600 }}>نام برند</div>} name='brandName' style={{ margin: 12 }}>
                            <Input placeholder='نام برند' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={<div style={{ marginLeft: 78, fontWeight: 600 }}> مقدار کالا</div>} name='goodCount' style={{ margin: 12 }} >
                            <Input placeholder='مقدار کالا' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                        <Form.Item label={<div style={{ marginLeft: 83, fontWeight: 600 }}>ترم خرید</div>} name='buyTerm' style={{ margin: 12 }} >
                            <Input placeholder='ترم خرید' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                        <Form.Item label={<div style={{ marginLeft: 68, fontWeight: 600 }}>بندر بارگیری</div>} name='startPort' style={{ margin: 12 }}>
                            <Input placeholder='بندر بارگیری' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label={<div style={{ marginLeft: 77, fontWeight: 600 }}>بندر تخلیه</div>} name='endPort' style={{ margin: 12 }}>
                            <Input placeholder='بندر تخلیه' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                        <Form.Item label={<div style={{ marginLeft: 33, fontWeight: 600 }}>قیمت واحد  (FOB)</div>} name='fobPrice' style={{ margin: 12 }}>
                            <Input placeholder='قیمت واحد  (FOB)' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label={<div style={{ marginLeft: 69, fontWeight: 600 }}>هزینه حمل</div>} name='transportPrice' style={{ margin: 12 }}>
                            <Input placeholder='هزینه حمل' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                        <Form.Item label={<div style={{ marginLeft: 34, fontWeight: 600 }}>قیمت واحد  (CFR)</div>} name='cfrPrice' style={{ margin: 12 }}>
                            <Input placeholder='قیمت واحد  (CFR)' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>



                    </Col>


                    <Col span={8}>

                        <Form.Item label={<div style={{ marginLeft: 78, fontWeight: 600 }}>قیمت کل</div>} name='totalPrice' style={{ margin: 12 }}>
                            <Input placeholder='قیمت کل' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
                        </Form.Item>

                        {page === "billing" ? (<Form.Item label={<div style={{ marginLeft: 23, fontWeight: 600 }}> شماره ثبت سفارش</div>} name='registerbuyingNumber' style={{ margin: 12 }}>
                            <Input placeholder='شماره ثبت سفارش' style={{ width: 160, height: 40, background: '#F8F8F8' }} />
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