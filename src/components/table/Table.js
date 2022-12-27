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
    const [form] = Form.useForm();
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    const [users, setusers] = useState([])
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

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
                name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off"
                style={{ background: "#FFFFFF", borderRadius: 8, padding: 50 }}
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 59, fontWeight: 600 }}>
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
                                <div style={{ marginLeft: 65, fontWeight: 600 }}>
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
                                <div style={{ marginLeft: 65, fontWeight: 600 }}>
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
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 75, fontWeight: 600 }}>
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
                                <div style={{ marginLeft: 89, fontWeight: 600 }}>نام برند</div>
                            }
                            name="brandName"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="نام برند"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 83, fontWeight: 600 }}>ترم خرید</div>
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
                                <div style={{ marginLeft: 68, fontWeight: 600 }}>
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
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 77, fontWeight: 600 }}>
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
                                <div style={{ marginLeft: 33, fontWeight: 600 }}>
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
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 69, fontWeight: 600 }}>هزینه حمل</div>
                            }
                            name="transportPrice"
                            style={{ margin: 12 }}
                        >
                            <Input
                                placeholder="هزینه حمل"
                                style={{ width: 160, height: 40, background: "#F8F8F8" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label={
                                <div style={{ marginLeft: 34, fontWeight: 600 }}>
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
                                <div style={{ marginLeft: 78, fontWeight: 600 }}>قیمت کل</div>
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
                                    <div style={{ marginLeft: 23, fontWeight: 600 }}>
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
                </Row>
                <h1 style={{ margin: '25px 0px 30px 0px' }}>ایجاد فاکتور</h1>
                <Row id="go" style={{ marginTop: 8, marginRight: 50 }}>
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}>نام کالا</h1>
                    <Col span={2} />
                    <Col span={1} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}> قیمت واحد</h1>
                    <Col span={2} />
                    <Col span={2} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}> مقدار کالا</h1>
                    <Col span={2} />
                    <h1 style={{ fontWeight: 600, fontSize: 14 }}>قیمت فاکتور سطر</h1>
                </Row>
                <FactorizeTable />
                <Form.Item label="Button">
                    <Button onClick={() => {
                        console.log(form.getFieldValue("users"), "usersssssss")
                        console.log(users, "users")




                    }}>Button</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default Table;
