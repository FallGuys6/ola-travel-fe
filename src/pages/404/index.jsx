import React from "react";
import { Result, Button } from 'antd';

const NotFound = () => {
    return (
        <React.Fragment>
            <Result
                status="404"
                title="404"
                subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại."
                extra={<Button href={"."} type="link">Trở về trang chủ</Button>}
            />
        </React.Fragment>
    )
}

export default NotFound;