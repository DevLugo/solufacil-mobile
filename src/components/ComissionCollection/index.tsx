import { Affix, Button, Card, Col, DatePicker, Row, Statistic, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { PlusOutlined, EllipsisOutlined, CalendarOutlined } from '@ant-design/icons';
interface DataType {
    key: React.Key;
    name: string;
    count: number;
    amount: number;
    children?: DataType[];
    actions?: any

}
const dateFormat = 'DD/MM/YYYY';
type Props = {
    leadId: string
}
const data: DataType[] = [
    {
        key: 1,
        name: 'Aperturas',
        count: 32,
        amount: 2250,
        children: [
            {
                key: 11,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 12,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 13,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 14,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
        ]
    },
    {
        key: 2,
        name: 'Abonos',
        count: 32,
        amount: 2250,
        children: [
            {
                key: 11,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 12,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 13,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
            {
                key: 14,
                name: 'Maria Che Ek',
                count: 5,
                amount: 5,
            },
        ]
    },
    {
        key: 3,
        name: 'Extras',
        count: 32,
        amount: 2250,
        actions: <Button type="primary" icon={< PlusOutlined />} size={"small"} />

    },
];
export default function ComissionCollection(props: Props) {
    const columns: ColumnsType<DataType> = [
        { title: 'Tipo', dataIndex: 'name', key: 'name' },
        { title: 'Total', dataIndex: 'count', key: 'count' },
        { title: 'Pago', dataIndex: 'amount', key: 'amount' },
        { title: 'Actions', dataIndex: 'actions', key: 'actions' },

    ];

    return (
        <Row>
            <Col span={24}>
                <Affix offsetTop={46}>
                    <Card className="location-header" style={{ textAlign: 'center' }}>
                        <Statistic title="Total a pagar" value={4520} />
                    </Card>
                </Affix>
                <Table
                    columns={columns}
                    dataSource={data}
                />
                <Affix offsetBottom={0}>
                    <Button type="primary" block danger >
                        Recibir pagos: <span style={{ fontWeight: 600, marginLeft: "10px" }}>Guardar Cambios</span>
                    </Button>
                </Affix>
            </Col>
        </Row>
    )
}
