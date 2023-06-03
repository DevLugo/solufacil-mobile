import { Segmented, Card, Col, Statistic, Row, Switch, Button, Skeleton, Space } from "antd"
import Search from "antd/lib/input/Search";
import { useState } from "react";
import LoanOpeningCollection from "../../components/LoanOpeningCollection";
import PaymentCollection from "../../components/PaymentCollection";
import { CalendarOutlined } from '@ant-design/icons';
import ComissionCollection from "../../components/ComissionCollection";
import { useQuery } from "@apollo/client";
import { GetEmployee, GetEmployeeVariables, GetEmployee_getEmployee } from "../../graphql/queries/__generated__/getEmployee";
import { GET_EMPLOYEE } from "../../graphql/queries";
import client from '../../clients/apolloClient';
import { useParams } from "react-router-dom";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const LeadLoans = () => {
    const [activeSection, setActiveSection] = useState<string>("Cobranza");
    const [lead, setLead] = useState<GetEmployee_getEmployee | undefined>();
    const params = useParams();
    const sections: { [key: string]: any } = {
        "Cobranza": <PaymentCollection leadId={params.leadId!} />,
        "Aperturas": <LoanOpeningCollection leadId={params.leadId!} lead={lead} />,
        "Comisiones": <ComissionCollection leadId={params.leadId!} />
    };
    const { loading, error } = useQuery<GetEmployee, GetEmployeeVariables>(
        GET_EMPLOYEE,
        {
            variables: {
                where: {
                    userId: params.leadId!,
                },
            },
            client,
            onCompleted: (data) => {
                setLead(data.getEmployee);
            },
        }
    );

    return (
        <Card>
            <Row gutter={[10, 10]} style={{ textAlign: "center" }}>
                {loading ?
                    <>
                        <Space>
                            <Skeleton.Input active={true} />
                            <Skeleton.Input active={true} />
                        </Space>
                        <Space>
                            <Skeleton.Input active={true} />
                            <Skeleton.Input active={true} />
                        </Space>
                    </>
                    : <>
                        <Col span={9} offset={8} style={{ textAlign: "center" }}>
                            <MobileDatePicker defaultValue={dayjs('2022-04-17')} slotProps={{ textField: { size: "small", fullWidth: true } }} />
                        </Col>
                        <Col span={24}>
                            <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>{lead?.user.employee?.personalData.fullName.toLowerCase()}</span>
                        </Col>
                        {lead?.user.employee?.personalData.addresses?.length &&
                            <Col span={24} style={{ fontWeight: "bold", color: "#d8d7d7", textTransform: "capitalize" }}>
                                {lead?.user.employee?.personalData.addresses[0].location.name.toLowerCase()},
                                {lead?.user.employee?.personalData.addresses[0].location.municipality.name.toLowerCase()}
                            </Col>
                        }
                    </>
                }
            </Row>
            <br />
            <Segmented block options={["Cobranza", "Aperturas", 'Comisiones']} onChange={(section) => setActiveSection(section as string)} />
            <br />

            {sections[activeSection]}
        </Card >
    )
}

export default LeadLoans;