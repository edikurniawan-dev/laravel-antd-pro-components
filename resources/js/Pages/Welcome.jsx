import PhoneInput from "antd-phone-input";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { ConfigProvider, Divider, Input } from "antd";

export default function Welcome() {
    return (
        <div
            id="test-pro-layout"
            style={{
                height: "100vh",
                overflow: "auto",
            }}
        >
            {/* <ProConfigProvider hashed={false}> */}
            <ConfigProvider
                key="root"
                getTargetContainer={() => {
                    return (
                        document.getElementById("test-pro-layout") ||
                        document.body
                    );
                }}
            >
                <ProLayout>
                    <PhoneInput enableSearch country="id" />
                    <Divider />
                    <Input />
                </ProLayout>
            </ConfigProvider>
            {/* </ProConfigProvider> */}
        </div>
    );
}
