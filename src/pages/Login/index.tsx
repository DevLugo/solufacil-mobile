import { Button, Form, Input, Layout } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { selectMe, signInWithCredentials } from "../../store/authSlice";
import { useState } from "react";
import { useAppDispatch } from "../../store";
const { Header, Content, Footer, Sider } = Layout;

const Login = () => {
    const { loading, token, error } = useSelector(selectMe);
    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = () => {
        dispatch(signInWithCredentials({
            input: {
                email: user,
                password: password
            }
        }));
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '5em 3em' }}>
                <img src="/logo-solufacil.png" alt="Solufácil" style={{
                    width: "80%",
                    display: "block",
                    margin: "0 auto",
                }} />

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" onChange={e => setUser(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            size="large"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" block size="large" onClick={login}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}

export default Login;