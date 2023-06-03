import React, { useEffect, useState } from "react";
import { DownloadOutlined, EllipsisOutlined, FormOutlined, EditOutlined } from '@ant-design/icons';
import { Row, Col, DatePicker, Space, Input, Button, Checkbox, Affix, List, Alert, Select, Card, Statistic, Segmented, Switch, Skeleton } from 'antd';
import Search from "antd/lib/input/Search";
import "./index.css"
import { useAppDispatch } from "../../store";
import { fetchScheduledPaymentList, selectScheduledPaymentList, setChecked } from "../../store/scheduledPaymentListSlice";
import SkeletonTemplate from "./skeletonTemplate";
import { PaymentState } from "../../__generated__/globalTypes";
import moment from "moment";
import { useSelector } from "react-redux";

const { RangePicker } = DatePicker;
const { Option } = Select;
interface SearchForm {
    borrowerId?: string;
    status?: string;
    dateStart: string;
    dateEnd: string;
}

type Props = {
    leadId: string
}

export default function PaymentCollection(props: Props) {
    const { leadId } = props;
    const dispatch = useAppDispatch();
    const { loadingPayments, payments } = useSelector(selectScheduledPaymentList);

    const loading = false
    const [showPayModal, setShowPayModal] = useState<boolean>(false);
    const [selectedLoan, setSelectedLoan] = useState<any>();
    const [selectedPaymentIds, setSelectedPaymentIds] = useState<string[]>([]);
    const lastWeekDay = moment().clone().endOf('isoWeek').format('YYYY-MM-DD');
    const [amountToPaySum, setAmountToPaySum] = useState<number>(0);
    const [filterSelected, setFilterSelected] = useState<PaymentState[]>(
        [PaymentState.PAID_OUT, PaymentState.PARTIALLY_PAID, PaymentState.PENDING]
    );

    useEffect(() => {
        getPaymentList();
    }, [])


    const getPaymentList = () => {
        dispatch(fetchScheduledPaymentList({
            where: {
                loan: {
                    is: {
                        contract: {
                            is: {
                                loanLead: {
                                    is: {
                                        id: {
                                            equals: leadId
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                dueDate: {
                    lte: lastWeekDay
                },
                OR: [
                    {
                        status: {
                            in: filterSelected
                        }
                    },
                    {
                        delayed: {
                            equals: true
                        }
                    }
                ]
            }
        }))
    }
    return (
        <Row justify="center">
            {
                loadingPayments ?
                    <Col span={24}>
                        <SkeletonTemplate />
                    </Col> : <>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <Statistic title="Cobranza" value={payments.reduce((prev, curr) => prev + curr.pendingAmount, 0)} />
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <Statistic title="Clientes" value={payments.length} />
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                            <Statistic title="Carteras" value={"???"} />
                        </Col>
                        <Col span={24}>
                            <Col span={24} className="mt-2" style={{ padding: "10px 0" }}>
                                <Search placeholder="TODO: Implement Filter" allowClear size="large" />
                            </Col>
                            <Row justify={"space-around"}>
                                <Space wrap>
                                    <Button type="primary" icon={<DownloadOutlined />} size={"middle"}>TODO:Descargar PDF</Button>
                                    <Switch checkedChildren="ExtraCobranza" unCheckedChildren="TODO:Pagar Comision" style={{ color: "red", marginBottom: "5px" }} />
                                </Space>
                            </Row>
                        </Col >

                        <Col span={24} >
                            <List
                                itemLayout="vertical"
                                size="large"
                                dataSource={payments}
                                renderItem={(item, idx) => (
                                    <List.Item
                                        key={`${idx}_payment`}
                                        style={{ margin: '3px', background: '#fff' }}
                                        className="payment-list-item item-delayed"
                                    >
                                        <List.Item.Meta
                                            title={
                                                <>
                                                    <Row className="mb.0">
                                                        <Col span="2">
                                                            <Checkbox onChange={() => {
                                                                dispatch(setChecked({ idx }));
                                                            }} checked={item.checked} />
                                                        </Col>
                                                        <Col span="12">
                                                            --{item.borrower?.personalData?.fullName}--
                                                        </Col>
                                                        <Col span={4} style={{
                                                            fontSize: "1em",
                                                            color: "green",
                                                        }}>
                                                            ${item.amountForCurrentPayment.toLocaleString("en-US")}
                                                        </Col>
                                                        <Col span={2}>
                                                            <Button onClick={() => setSelectedLoan(item)} type="primary" icon={<EditOutlined />} size={"small"} />
                                                        </Col>
                                                        <Col span={2}>
                                                            <Button type="primary" danger icon={<FormOutlined />} size={"small"} />
                                                        </Col>
                                                        <Col span={2}>
                                                            <Button type="primary" icon={<EllipsisOutlined />} size={"small"} />
                                                        </Col>
                                                    </Row>
                                                </>}
                                            description={item.borrower?.personalData?.addresses?.length ? `${item.borrower?.personalData?.addresses[0].street} ${item.borrower?.personalData?.addresses[0].interiorNumber}` : ""}
                                        />
                                    </List.Item>

                                )}
                            />
                            <Affix offsetBottom={0}>
                                <Button type="primary" block danger >
                                    Recibir pagos: <span style={{ fontWeight: 600, marginLeft: "10px" }}>${amountToPaySum.toLocaleString("en-US")}</span>
                                </Button>
                            </Affix>
                        </Col>
                    </>
            }
        </Row >
    );
}
