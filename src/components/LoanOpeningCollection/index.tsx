import React, { useEffect, useState } from "react";
import { CalendarOutlined, DeleteOutlined, FormOutlined, EditOutlined } from '@ant-design/icons';
import { Row, Col, DatePicker, Form, Input, Button, Dropdown, Affix, List, Space, Alert, Select, Card, Statistic, Segmented, Switch, Table } from 'antd';
import Search from "antd/lib/input/Search";
import { ColumnsType } from "antd/es/table";
import "./index.css"
import CreateLoan from "../Loan/CreateLoan";
import { GetEmployee_getEmployee } from "../../graphql/queries/__generated__/getEmployee";
import type { MenuProps } from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;
interface DataType {
    key: string;
    name: string;
    gived: number;
    loan: number;
    weeks: number;
}
type Props = {
    leadId: string,
    lead?: GetEmployee_getEmployee;
}
const data: DataType[] = [
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
    {
        key: '1',
        name: 'Maria Pauluta Vera May',
        gived: 3115,
        loan: 4950,
        weeks: 15,
    },
];

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Resumen
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Editar
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Eliminar
            </a>
        ),
    },
];
export default function LoanOpeningCollection(props: Props) {
    const { leadId, lead } = props;
    const [showCreateLoanModal, setShowCreateLoanModal] = useState<boolean>(false);
    const columns: ColumnsType<DataType> = [
        {
            title: 'Nombre',
            dataIndex: 'name_',
            key: 'name_',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Otorgado',
            dataIndex: 'gived',
            key: 'gived',
        },
        {
            title: 'Credito',
            dataIndex: 'loan',
            key: 'loan',
        },
        {
            title: '',
            key: 'weeks',
            dataIndex: 'weeks',
            render: (_, weeks) => (
                <Row>
                    <Col>
                        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                            <Button>...</Button>
                        </Dropdown>
                    </Col>
                </Row>
            ),
        },

    ];
    {/* <Button type="primary" icon={<EditOutlined />} size={"small"} />
    <Button type="primary" icon={<DeleteOutlined />} size={"small"} danger /> */}
    return (
        <Row justify="center">
            <Col span={8} style={{ textAlign: "center" }}>
                <Statistic title="Aperturas" value={20} />
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
                <Statistic title="Renovaciones" value={20} />
            </Col>
            <Col span={8} style={{ textAlign: "center" }}>
                <Statistic title="Dinero Otorgado" value={3} />
            </Col>
            <br />
            <Col span={24} >
                <Row justify={"end"} style={{ marginTop: "5px" }}>
                    <Button
                        type="primary"
                        style={{ marginBottom: 16 }}
                        onClick={() => setShowCreateLoanModal(true)}
                    >
                        Nuevo Crédito
                    </Button>
                </Row>
                <Table columns={columns} dataSource={data} pagination={false} id="a" />
                <Affix offsetBottom={0}>
                    <Button type="primary" block danger>
                        Guardar Cambios
                    </Button>
                </Affix>
            </Col>
            <CreateLoan display={showCreateLoanModal} setDisplay={setShowCreateLoanModal} lead={lead} />
        </Row >
    );
}
