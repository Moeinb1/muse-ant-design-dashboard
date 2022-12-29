import React, { useState } from "react";
import { Form, Input, DatePicker, ConfigProvider, Space, Row, Col, Button } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import FactorizeTable from './FactorizeTable';


const Table = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const [form] = Form.useForm();
    console.log(form.getFieldValue(form.getFieldValue('contractNumber')), "dasasd")

    return (
        <>
            <Form
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
                name="basic"
                onFinish={onFinish} autoComplete="off"
                style={{ background: "#FFFFFF", borderRadius: 8, padding: 50 }}
                form={form}
                layout="vertical"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 39, fontWeight: 600, display: 'ruby' }}>
                                    شماره قرارداد
                                </div>
                            }
                            name="contractNumber"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="شماره قرارداد"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>

                        <Form.Item
                            name="contractDate"
                            label={
                                <div style={{ marginLeft: 47, fontWeight: 600, display: 'ruby' }}>
                                    تاریخ قرارداد
                                </div>
                            }
                            style={{ margin: 12 }}
                        >
                            <DatePicker
                                placeholder="تاریخ قرارداد"
                                fa_IR
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 47, fontWeight: 600, display: 'ruby' }}>
                                    نام فروشنده
                                </div>
                            }
                            name="sellerName"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="نام فروشنده"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 60, fontWeight: 600, display: 'ruby' }}>قیمت کل</div>
                            }
                            name="totalPrice"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="قیمت کل"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        {page === "billing" ? (
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 9, fontWeight: 600, display: 'ruby' }}>
                                        شماره ثبت سفارش
                                    </div>
                                }
                                name="registerbuyingNumber"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="شماره ثبت سفارش"
                                    style={{ width: 160, height: 40, background: "#F8F8F8" }}
                                />
                            </Form.Item>
                        ) : (
                            ""
                        )}
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 57, fontWeight: 600, display: 'ruby' }}>
                                    نام خریدار
                                </div>
                            }
                            name="buyerName"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="نام خریدار"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 72, fontWeight: 600, display: 'ruby' }}>نام برند</div>
                            }
                            name="brandName"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="نام برند"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 65, fontWeight: 600, display: 'ruby' }}>ترم خرید</div>
                            }
                            name="buyTerm"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="ترم خرید"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 17, fontWeight: 600, display: 'ruby' }}>
                                    قیمت واحد (CFR)
                                </div>
                            }
                            name="cfrPrice"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="قیمت واحد  (CFR)"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                    </Col>






                    <Col span={8}>


                        <Form.Item
                            label={
                                <div style={{ marginLeft: 50, fontWeight: 600, display: 'ruby' }}>
                                    بندر بارگیری
                                </div>
                            }
                            name="startPort"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="بندر بارگیری"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <div style={{ marginLeft: 58, fontWeight: 600, display: 'ruby' }}>
                                    بندر تخلیه
                                </div>
                            }
                            name="endPort"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="بندر تخلیه"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 15, fontWeight: 600, display: 'ruby' }}>
                                    قیمت واحد (FOB)
                                </div>
                            }
                            name="fobPrice"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="قیمت واحد  (FOB)"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 53, fontWeight: 600, display: 'ruby' }}>هزینه حمل</div>
                            }
                            name="transportPrice"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="هزینه حمل"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                    </Col>






                </Row>
                <h1 style={{ margin: '25px 0px 30px 0px' }}>ایجاد فاکتور</h1>
                <Row id="go" style={{ marginTop: 8, marginRight: 50 }}>
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}>نام کالا</h1>
                    <Col span={2} />
                    <Col span={2} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}> قیمت واحد</h1>
                    <Col span={2} />
                    <Col span={2} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}> مقدار کالا</h1>
                    <Col span={3} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}>قیمت فاکتور سطر</h1>
                </Row>
                <FactorizeTable name='usersss' />

                <Form.Item>

                    <Button style={{ width: 250, fontSize: 16, fontWeight: 600, color: 'white', borderColor: 'blue', background: 'blue', marginRight: window.outerWidth / 4 }} primary blue onClick={() => {
                        console.log(form.getFieldValue("usersss"), "dasasd")
                    }}>اضافه کردن پرفرما</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default Table;
