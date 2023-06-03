import { Space, Skeleton } from 'antd';

export default function SkeletonTemplate() {
    return (
        <>
            {
                [...Array(8)].map(idx =>
                    <div key={idx + "div" + Math.floor(Math.random() * 100)}>
                        <Space >
                            <Skeleton.Input active={true} />
                            <Skeleton.Button active={true} />
                            <Skeleton.Button active={true} />
                        </Space>
                        <br />
                        <br />
                    </div>
                )
            }
        </>
    )
} 