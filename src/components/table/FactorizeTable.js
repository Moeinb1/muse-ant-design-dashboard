import React from 'react';
import { InputNumber, Select, Button, Form, Input, Space, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./FactorizeTable";

const FactorizeTable = () => {

    const [form] = Form.useForm();
    const { Option } = Select;
    const selectBefore = (
        <Select
            defaultValue="add"
            style={{
                width: 60,
            }}
        >
            <Option value="add">+</Option>
            <Option value="minus">-</Option>
        </Select>
    );
    const selectAfter = (
        <Select
            defaultValue="USD"
            style={{
                width: 60,
            }}
        >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
        </Select>
    );


    return (
        <Col span={24} style={{ display: 'inline flow-root list-item', direction: 'rtl' }}>

            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (

                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                <Form.Item
                                    {...restField}
                                    name={[name, 'priceRowfactor']}

                                >
                                    <Row style={{ direction: 'ltr', background: "#F8F8F8", width: 160 }} placeholder="قیمت فاکتور سطر" >
                                        {console.log(Form)}
                                    </Row>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'priceUnit']}

                                >
                                    <InputNumber
                                        defaultValue={0}
                                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                                        style={{ direction: 'rtl', background: "#F8F8F8", width: 160 }}
                                        placeholder="مقدار کالا"
                                    />
                                </Form.Item>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'goodUnit']}

                                >
                                    <InputNumber style={{ direction: 'ltr', background: "#F8F8F8", width: 250 }} placeholder="قیمت واحد"
                                        addonBefore={selectBefore} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                                        addonAfter={selectAfter} defaultValue={0} />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'goodName']}

                                >

                                    <Input style={{ direction: 'rtl', background: "#F8F8F8", width: 160 }} placeholder="نام کالا" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button style={{ fontWeight: 600, fontSize: 14, inlineSize: 'initial' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                اضافه کردن ردیف
                            </Button>

                        </Form.Item>
                    </>
                )}
            </Form.List>

        </Col>
    );
};
export default FactorizeTable;