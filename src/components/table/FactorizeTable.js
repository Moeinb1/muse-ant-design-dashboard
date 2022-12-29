import React from 'react';
import { InputNumber, Select, Button, Form, Input, Space, Col, Row } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./FactorizeTable.css";
import { Typography } from 'antd';

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

    let nameValue = Form.useWatch('usersss', form);


    return (
        <Form form={form}>
            <Col span={24} style={{ display: 'inline flow-root list-item', direction: 'rtl' }}>

                <Form.List name="usersss">
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
                                        <Typography

                                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                                            style={{ direction: 'ltr', background: "#F8F8F8", width: 160, paddingInlineEnd: 80, fontSize: 12 }} placeholder="قیمت فاکتور سطر" >
                                            {form.getFieldValue("usersss")[key] ? (form.getFieldValue("usersss")[key].goodUnit * form.getFieldValue("usersss")[key].priceUnit) : form.setFieldValue({
                                                "usersss": 0
                                            })}
                                        </Typography>
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'priceUnit']}

                                    >
                                        <InputNumber
                                            defaultValue={0}
                                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                                            style={{ direction: 'rtl', background: "#F8F8F8", width: 160, paddingInlineEnd: 70, fontSize: 12 }}
                                            placeholder="مقدار کالا"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, 'goodUnit']}

                                    >
                                        <InputNumber style={{ direction: 'ltr', background: "#F8F8F8", width: 250, fontSize: 12 }} placeholder="قیمت واحد"
                                            addonBefore={selectBefore} formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                            parser={(value) => value.replace(/\\s?|(,*)/g, '')}
                                            addonAfter={selectAfter} defaultValue={0} />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'goodName']}

                                    >

                                        <Input style={{ direction: 'rtl', background: "#F8F8F8", width: 160, fontSize: 12 }} placeholder="نام کالا" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button style={{ fontWeight: 600, fontSize: 12, inlineSize: 'initial' }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    اضافه کردن ردیف
                                </Button>

                            </Form.Item>
                        </>
                    )}
                </Form.List>

            </Col>
        </Form>
    );
};
export default FactorizeTable;