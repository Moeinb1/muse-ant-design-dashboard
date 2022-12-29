import React, { useState } from "react";
import { Form, Input, DatePicker, ConfigProvider, Space, Row, Col, Button, Select } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import "antd/dist/antd.css";
import { useLocation } from "react-router-dom";
import FactorizeTable from './FactorizeTable';
import "./Table.css";
import TextArea from "antd/lib/input/TextArea";


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
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
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
                    sm: { span: 12 },
                }}
                wrapperCol={{
                    xs: { span: 12 },
                    sm: { span: 12 },
                }}
                name="basic"
                onFinish={onFinish} autoComplete="off"
                style={{ background: "#FFFFFF", borderRadius: 8, padding: 20 }}
                form={form}
                layout="vertical"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Col>

                    <Row>
                        <Col span={8} >
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 42, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        شماره قرارداد
                                    </div>
                                }
                                name="contractNumber"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="شماره قرارداد"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="contractDate"
                                label={
                                    <div style={{ marginLeft: 47, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        تاریخ قرارداد
                                    </div>
                                }
                                style={{ margin: 12 }}
                            >
                                <DatePicker
                                    placeholder="تاریخ قرارداد"
                                    fa_IR
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 47, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        نام فروشنده
                                    </div>
                                }
                                name="sellerName"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="نام فروشنده"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 60, fontWeight: 600, display: 'ruby', fontSize: 12 }}>قیمت کل</div>
                                }
                                name="totalPrice"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="قیمت کل"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            {page === "billing" ? (
                                <Form.Item
                                    label={
                                        <div style={{ marginLeft: 9, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                            شماره ثبت سفارش
                                        </div>
                                    }
                                    name="registerbuyingNumber"
                                    style={{ margin: 12 }}
                                >
                                    <Input
                                        placeholder="شماره ثبت سفارش"
                                        style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                    />
                                </Form.Item>
                            ) : (
                                ""
                            )}
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 57, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        نام خریدار
                                    </div>
                                }
                                name="buyerName"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="نام خریدار"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 72, fontWeight: 600, display: 'ruby', fontSize: 12 }}>نام برند</div>
                                }
                                name="brandName"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="نام برند"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 65, fontWeight: 600, display: 'ruby', fontSize: 12 }}>ترم خرید</div>
                                }
                                name="buyTerm"
                                style={{ margin: 12 }}
                            >
                                <Select
                                    style={{ width: 160, height: 40, fontSize: 12 }}

                                    showSearch
                                    placeholder="ترم خرید"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'FOB',
                                            label: 'FOB',
                                        },
                                        {
                                            value: 'CPT',
                                            label: 'CPT',
                                        }
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 17, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        قیمت واحد (CFR)
                                    </div>
                                }
                                name="cfrPrice"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="قیمت واحد  (CFR)"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 50, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        بندر بارگیری
                                    </div>
                                }
                                name="startPort"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="بندر بارگیری"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 58, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        بندر تخلیه
                                    </div>
                                }
                                name="endPort"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="بندر تخلیه"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 15, fontWeight: 600, display: 'ruby', fontSize: 12 }}>
                                        قیمت واحد (FOB)
                                    </div>
                                }
                                name="fobPrice"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="قیمت واحد  (FOB)"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <div style={{ marginLeft: 53, fontWeight: 600, display: 'ruby', fontSize: 12 }}>هزینه حمل</div>
                                }
                                name="transportPrice"
                                style={{ margin: 12 }}
                            >
                                <Input
                                    placeholder="هزینه حمل"
                                    style={{ width: 160, height: 40, background: "#F8F8F8", fontSize: 12 }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <h1 style={{ margin: '25px 0px 30px 0px' }}>ایجاد فاکتور</h1>
                    <Row id="go" style={{ marginTop: 8, marginRight: 50 }}>
                        <h1 style={{ fontWeight: 600, fontSize: 12 }}>نام کالا</h1>
                        <Col span={2} />
                        <Col span={2} />
                        <h1 style={{ fontWeight: 600, fontSize: 12 }}> قیمت واحد</h1>
                        <Col span={2} />
                        <Col span={2} />
                        <h1 style={{ fontWeight: 600, fontSize: 12 }}> مقدار کالا</h1>
                        <Col span={2} />
                        <h1 style={{ fontWeight: 600, fontSize: 12 }}>قیمت فاکتور سطر</h1>
                    </Row>
                    <Row style={{ height: 1, background: 'gray', marginBottom: 5 }} />
                    <Row >
                        <FactorizeTable form={form} />
                    </Row>
                    <Form.Item >
                        <TextArea style={{ direction: 'rtl', width: 500, maxWidth: 500 }} rows={4} placeholder="یادداشت کنید" />
                    </Form.Item>
                </Col>
            </Form>
        </>
    );
};
export default Table;
