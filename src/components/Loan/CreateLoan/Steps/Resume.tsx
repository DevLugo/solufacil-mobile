import { useState, useEffect } from "react";
import moment from "moment";
import { ColumnsType } from "antd/lib/table";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Card, Button, Steps, message, Collapse, Descriptions, Input, DatePicker, Row, Col, Select, InputNumber, Divider, Alert, Table, Form } from "antd";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { MobileDatePicker } from "@mui/x-date-pickers";
import Icon, { EditOutlined } from '@ant-design/icons';

import PersonalDataResume from "./PersonalData/PersonalDataResume";
import { GetEmployee_getEmployee } from "../../../../graphql/queries/__generated__/getEmployee";
import { LoanForm } from "..";
import { GET_BORROWER } from "../../../../graphql/queries";
const { Panel } = Collapse;

type Props = {
    lead: GetEmployee_getEmployee | undefined
    borrowerId?: string
    setModalFooter: (footer: any[]) => void
    goToPage: (pageNumber: number) => void
    next: () => void
    prev: () => void
    saveLoan: () => void

}

export default function Resume(props: Props) {
    const { setModalFooter, lead, goToPage, next, prev, borrowerId, saveLoan } = props;

    const { register, control, getValues, watch, setValue, handleSubmit, formState } = useFormContext<LoanForm>();
    const onSubmit = (data: LoanForm) => saveLoan();

    const generateFooterButtons = () => {
        const buttons: any = [
            <Button key="submit" type="primary" onClick={prev}>
                Anterior
            </Button>,
            <Button key="back" onClick={handleSubmit(onSubmit)}>
                Otorgar
            </Button>,
        ];
        setModalFooter(buttons)
    }
    useEffect(() => {
        generateFooterButtons()
    }, [])

    return (
        <Row gutter={[3, 1]} className="my-3" style={{ marginLeft: "1px" }}>
            <Col span="24">
                <Collapse defaultActiveKey={['1']} >
                    <Panel header={
                        <>Informacion del Titular
                            <Button
                                size="small"
                                type="primary"
                                icon={<EditOutlined />}
                                onClick={() => goToPage(0)}
                            />
                        </>}
                        key="1"
                    >
                        <PersonalDataResume data={getValues("titular")} lead={lead} />
                    </Panel>
                    <Panel header={
                        <>Informacion del Aval
                            <Button
                                size="small"
                                type="primary"
                                icon={<EditOutlined />}
                                onClick={() => goToPage(1)}
                            />
                        </>}
                        key="2"
                    >
                        <PersonalDataResume data={getValues("endorsement")} lead={lead} />
                    </Panel>
                    <Panel header={
                        <>Informacion del Prestamo
                            <Button
                                size="small"
                                type="primary"
                                icon={<EditOutlined />}
                                onClick={() => goToPage(2)}
                            />
                        </>}
                        key="3"
                    >
                        <Descriptions
                            bordered
                            size={"small"}
                        >
                            <Descriptions.Item label="Interes">{getValues("loan.loan").rate} </Descriptions.Item>
                            <Descriptions.Item label="Pago semanal">{Number(getValues("loan.amountToDeliver") * (1 + getValues("loan.loan").rate)) / getValues("loan.loan")?.weekDuration}</Descriptions.Item>
                            <Descriptions.Item label="Número de semanas">{getValues("loan.loan")?.weekDuration} </Descriptions.Item>
                            <Descriptions.Item label="Fecha termino">{getValues("loan.lastPaymentDate").format("DD/MM/YYYY")}</Descriptions.Item>
                            <Descriptions.Item label="Deuda Prestamo Actual">{getValues("loan.loan").activeLoan?.getBorrower.activeLoan?.pendingAmount || 0}</Descriptions.Item>
                            <Descriptions.Item label="Cantidad a Entregar">{Number(getValues("loan.amountToDeliver")) - Number(getValues("loan.loan").activeLoan?.getBorrower.activeLoan?.pendingAmount || 0)}</Descriptions.Item>
                            <Descriptions.Item label="Deuda Nueva">{Number(getValues("loan.amountToDeliver") * (1 + getValues("loan.loan").rate)) + Number(getValues("loan.loan").activeLoan?.getBorrower.activeLoan?.pendingAmount || 0)}</Descriptions.Item>
                        </Descriptions>
                    </Panel>
                </Collapse>
            </Col >
        </Row >
    )
}
