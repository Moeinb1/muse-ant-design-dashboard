import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Col } from 'antd';


const FactorizeTable = () => {



    return (
        <Col style={{ display: 'flex', direction: 'rtl' }}>

            <Form.List name="users" style={{}}>
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
                                    name={[name, 'first']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing first name',
                                        },
                                    ]}
                                >
                                    <Input style={{ direction: 'rtl', background: "#F8F8F8" }} placeholder="قیمت فاکتور سطر" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing last name',
                                        },
                                    ]}
                                >
                                    <Input style={{ direction: 'rtl', background: "#F8F8F8" }} placeholder="قیمت واحد" />
                                </Form.Item>

                                <Form.Item
                                    {...restField}
                                    name={[name, 'nast']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing nast name',
                                        },
                                    ]}
                                >
                                    <Input style={{ direction: 'rtl', background: "#F8F8F8" }} placeholder="مقدار کالا" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'past']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing past name',
                                        },
                                    ]}
                                >
                                    <Input style={{ direction: 'rtl', background: "#F8F8F8" }} placeholder="نام کالا" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button style={{ fontWeight: 600, fontSize: 14 }} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
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