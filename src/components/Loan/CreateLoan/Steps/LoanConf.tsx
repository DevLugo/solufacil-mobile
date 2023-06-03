import { useState, useEffect } from "react";
import moment from "moment";
import { ColumnsType } from "antd/lib/table";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Card, Button, Steps, message, Input, DatePicker, Row, Col, Select, InputNumber, Divider, Alert, Table, Form } from "antd";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { LoanForm, LoanPersonalDataForm } from "..";
import client from '../../../../clients/apolloClient';
import { LOAN_TYPES } from "../../../../graphql/queries/loanTypes";
import { loanTypes, loanTypes_loanTypes } from "../../../../graphql/queries/__generated__/loanTypes";
import { getBorrower, getBorrowerVariables } from "../../../../graphql/queries/__generated__/getBorrower";
import { GET_BORROWER } from "../../../../graphql/queries";

const { Option } = Select;

type Props = {
    borrowerId?: string
    next: () => void
    prev: () => void
    setModalFooter: (footer: any[]) => void

}
interface DataType {
    key: string;
    title: string;
    dataIndex: string;

}
const columns: ColumnsType<DataType> = [
    {
        title: 'Informacion',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Valor',
        dataIndex: 'value',
        key: 'value',
    },
];

const DEFAULT_AMOUNT_TO_DELIVER = 3000;

export default function LoanConf(props: Props) {
    const { register, control, getValues, watch, setValue, handleSubmit, formState } = useFormContext<LoanForm>();
    const { borrowerId, next, prev, setModalFooter } = props;
    const [tableData, setTableData] = useState<DataType[]>([]);
    const [selectedLoan, setSelectedloan] = useState<loanTypes_loanTypes | undefined>();
    const [lastPaymentDate, setLastPaymentDate] = useState<Dayjs>(dayjs());
    // TODO: 1.- identify when will use a previous loan 
    const { data: activeLoan } = useQuery<getBorrower, getBorrowerVariables>
        (
            GET_BORROWER,
            {
                client,
                variables: {
                    where: {
                        id: borrowerId//borrowerId
                    }
                },
            }
        );
    const { error, data: loanTypesList } = useQuery<loanTypes>
        (
            LOAN_TYPES,
            {
                client,
                variables: {
                    where: {}
                },
            }
        );

    useEffect(() => {
        setValue("loan.loan", selectedLoan);
    }, [selectedLoan]);

    useEffect(() => {
        setValue("loan.lastPaymentDate", lastPaymentDate);
    }, [lastPaymentDate]);

    const onSubmit = (data: any) => {
        next()
    };

    const generateFooterButtons = () => {
        let buttons: any = [];
        buttons = [
            <Button key="submit" type="primary" onClick={prev}>
                Previous
            </Button>,
            <Button key="back" onClick={handleSubmit(onSubmit)}>
                Next
            </Button>,
        ];
        setModalFooter(buttons)
    }
    useEffect(() => {
        generateFooterButtons();
    }, [])
    useEffect(() => {
        const data: DataType[] = [
            {
                key: '1',
                value: selectedLoan?.rate,
                name: "Interes",
                render: value => `${value} %`
            },
            {
                key: '2',
                value: 1,
                value: Number(getValues("loan.amountToDeliver") * (1 + selectedLoan?.rate)) / selectedLoan?.weekDuration,
                name: "Pago semanal",
            },
            {
                key: '3',
                value: selectedLoan?.weekDuration,
                name: "Número de semanas",
            },
            {
                key: '4',
                value: lastPaymentDate.format("DD/MM/YYYY"),
                name: "Fecha termino",
            },
            {
                key: '5',
                value: activeLoan?.getBorrower.activeLoan?.pendingAmount || 0,
                name: "Deuda Prestamo Previo",
            },
            {
                key: '6',
                value: Number(getValues("loan.amountToDeliver")) - Number(activeLoan?.getBorrower.activeLoan?.pendingAmount || 0),
                name: "Cantidad a Entregar",
            },
            {
                key: '7',
                value: Number(getValues("loan.amountToDeliver") * (1 + selectedLoan?.rate)) + Number(activeLoan?.getBorrower.activeLoan?.pendingAmount || 0),
                name: "Deuda Nueva",
            },
        ];
        setTableData(data)
        //@ts-ignore
    }, [watch("loan.amountToDeliver"), selectedLoan, lastPaymentDate])

    useEffect(() => {
        //@ts-ignore
        setSelectedloan(loanTypesList?.loanTypes.find(e => e.id === getValues("loan.loanTypeId")))
        //@ts-ignore
    }, [watch("loan.loanTypeId")])

    useEffect(() => {
        setValue("loan.amountToDeliver", DEFAULT_AMOUNT_TO_DELIVER);
    }, []);
    useEffect(() => {
        //@ts-ignore
        const firstPaymentDate = getValues("loan.firstPaymentDate");
        if (firstPaymentDate && selectedLoan) {
            const lastPaymentDateObj = dayjs(firstPaymentDate).add(selectedLoan.weekDuration * 7, "days");
            setLastPaymentDate(lastPaymentDateObj);
        }
        //@ts-ignore
    }, [watch("loan.firstPaymentDate")])

    return (
        <Row gutter={[3, 1]} className="my-3" style={{ marginLeft: "1px" }}>
            <h1>Configurar Prestamo</h1>
            <Col span={24} className="v-center">
                <Row>
                    <Col span={24} >Tipo de prestamo: </Col>
                    <Col span={24}>
                        {/* @ts-ignore */}
                        <Controller
                            control={control}
                            name='loan.loanTypeId'
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <><Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Select
                                        style={{ width: '100%' }}
                                        {...field}>
                                        {loanTypesList?.loanTypes.map(c =>
                                            <Option value={c.id}>{c.weekDuration} Semanas, {c.rate * 100}% de Interes </Option>)}
                                    </Select>
                                </Form.Item>

                                </>
                            )}
                        />
                    </Col>
                </Row>
            </Col>
            <Col span={10} className="">
                Prestamo de:
            </Col>
            <Col span={14} className="">
                <Controller
                    control={control}
                    name='loan.amountToDeliver'
                    rules={{ required: true }}
                    render={(
                        { field, fieldState }
                    ) => (
                        <Form.Item
                            className="w-full"
                            validateStatus={fieldState.invalid ? "error" : ""}
                        >
                            {/* @ts-ignore*/}
                            <InputNumber {...field} className="w-full" addonBefore="$" addonAfter="MXN" />
                        </Form.Item>
                    )}
                />
            </Col>
            <Col span={10} className="align-middle px-3 mt-1">
                Fecha Primer Pago:
            </Col>
            <Col span={14} className="align-middle px-3 mt-1">
                {/* @ts-ignore */}
                <Controller
                    control={control}
                    name="loan.firstPaymentDate"
                    rules={{ required: true }}
                    render={(
                        { field, fieldState }
                    ) => (
                        <Form.Item
                            className="w-full"
                            validateStatus={fieldState.invalid ? "error" : ""}
                        >
                            <MobileDatePicker slotProps={{ textField: { size: "small", fullWidth: true } }} {...field} />
                        </Form.Item>
                    )}
                />
            </Col>
            {!selectedLoan ?
                <Alert
                    message="Seleccione tipo de prestamo"
                    description="Selecione el tipo de prestamo del la lista en la parte superior"
                    type="error"
                    closable
                /> :
                <Col span={24}>
                    <Table dataSource={tableData} columns={columns} pagination={false} />
                </Col>
            }
        </Row >
    )
}
