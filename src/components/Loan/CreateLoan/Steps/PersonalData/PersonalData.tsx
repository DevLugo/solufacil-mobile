import { Col, DatePicker, Divider, Button, Alert, Input, Form, Modal, notification, Row, Switch, Select, Steps } from "antd";
import { useForm, Controller, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import client from '../../../../../clients/apolloClient';
import TextArea from "antd/lib/input/TextArea";
import { LoanForm, LoanPersonalDataForm } from "../..";
import { useLazyQuery } from "@apollo/client";
import { borrowers, borrowersVariables, borrowers_borrowers } from "../../../../../graphql/queries/__generated__/borrowers";
import { BORROWERS } from "../../../../../graphql/queries";
import { GetEmployee_getEmployee } from "../../../../../graphql/queries/__generated__/getEmployee";
import { MobileDatePicker } from "@mui/x-date-pickers";
import "./../../index.css";

const { Option } = Select;
const { Step } = Steps;
/**
     * nombre
     * monto
     * plazo
     * pago semanal
     * domicilio
     * celular
     * fecha nacimiento
     * aval
     * direccion
     * celular aval
     * */

interface Props {
    lead: GetEmployee_getEmployee | undefined
    type: "titular" | "endorsement",
    currentStep: number
    next: () => void
    prev: () => void
    setModalFooter: (footer: any[]) => void
}
export default function PersonalDataForm(props: Props) {
    const { lead, next, prev, setModalFooter, currentStep } = props;
    const { type: formType, isRenovation } = props;
    const { register, control, getValues, watch, setValue, handleSubmit, formState } = useFormContext<LoanForm>();
    const [leadAddress, setLeadAddress] = useState<GetEmployee_getEmployee | undefined>(undefined);
    const [borrowers, setBorrowers] = useState<borrowers_borrowers[]>([]);
    const [useTheSameEndorsement, setUseTheSameEndorsement] = useState<boolean>(false);
    const locationId = lead?.user.employee?.personalData.addresses?.length ?
        lead?.user.employee?.personalData.addresses[0].locationId : "-1"
    const [getBorrowers] = useLazyQuery<borrowers, borrowersVariables>
        (
            BORROWERS,
            {
                client,
                variables: {
                    where: {
                        personalData: {
                            is: {
                                addresses: {
                                    some: {
                                        locationId: {
                                            equals: locationId
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                onCompleted: (data) => {
                    setBorrowers(data.borrowers);
                }
            },
        );

    const onSubmit = (data: any) => {
        next()
    };
    const generateFooterButtons = () => {
        let buttons: any = [];
        if (currentStep === 0) {
            buttons = [
                <Button key="back" onClick={handleSubmit(onSubmit)}>
                    Next
                </Button>,
            ];
        } else {
            buttons = [
                <Button key="submit" type="primary" onClick={prev}>
                    Previous
                </Button>,
                <Button key="back" onClick={handleSubmit(onSubmit)}>
                    Next
                </Button>,
            ];
        }
        setModalFooter(buttons)
    }
    useEffect(() => {
        generateFooterButtons();
    }, [])

    useEffect(() => {
        console.log("******************LIDER", lead)

        setLeadAddress(lead?.user?.employee?.personalData?.addresses.length ?
            lead?.user.employee.personalData.addresses[0] : null);
    }, [lead])
    const setIsRenovation = (isRenovation: boolean) => {
        setValue("isRenovation", isRenovation)
    }

    useEffect(() => {
        if (getValues("isRenovation")) {
            getBorrowers()
        } else {
            //@ts-ignore
/*             setValue("titular.borrowerId", undefined);
 */        }
    }, [watch("isRenovation")])
    return (
        <Row gutter={[12, 0]} className="my-3">
            {formType === "titular" &&
                <>
                    <Col>
                        <span style={{ fontWeight: "bolder" }}>
                            ¿Es una Renovacion?</span> <Switch checkedChildren="SI" unCheckedChildren="NO"
                                checked={watch("isRenovation")} onChange={(value) => setIsRenovation(value)} />
                    </Col>
                    {watch("isRenovation") &&
                        <Col span={24} >
                            <Controller
                                control={control}
                                name={`${formType}.t`}
                                rules={{ required: true }}
                                render={(
                                    { field, fieldState }
                                ) => (
                                    <Form.Item
                                        className="w-full"
                                        validateStatus={fieldState.invalid ? "error" : "success"}
                                    >
                                        {/* @ts-ignore*/}
                                        <Select className="w-full" {...field} allowClear>
                                            {/* @ts-ignore*/}
                                            {borrowers.map((b, idx) =>
                                                <Option key={idx} value={b.id}>{b.personalData?.fullName}</Option>)}
                                        </Select>
                                    </Form.Item>
                                )}
                            />
                        </Col>
                    }
                </>
            }
            {formType === "endorsement" && watch("isRenovation") &&
                <>
                    <Col><h3>¿Usar el mismo aval?</h3></Col>
                    <Col>
                        <Switch checked={useTheSameEndorsement}
                            onChange={(value) => setUseTheSameEndorsement(value)} />
                    </Col>
                </>
            }
            {/* @ts-ignore*/}
            {(watch("isRenovation") && !getValues('titular.borrowerId')) ?
                <Alert
                    message="Seleccione el Cliente/Aval de DropDown anterior"
                    type="error"
                /> : <>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Nombres
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.firstName`}
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Nombres" {...field} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />

                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Fecha Nacimiento
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.birthDate` as any}
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (

                                <div className={fieldState.invalid ? "error" : ""}>
                                    <MobileDatePicker slotProps={{ textField: { size: "small", fullWidth: true } }} {...field} />
                                </div>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Apellidos
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.lastName` as any}
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Apellidos" {...field} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />

                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Calle
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.addresses.0.street` as any}
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Calle" {...field} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />

                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Número Exterior
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.addresses.0.exteriorNumber` as any}
                            rules={{ required: false }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input type="text"
                                        {...field}
                                        disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement}
                                    />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Número Interior
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.addresses.0.interiorNumber` as any}
                            rules={{ required: false }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Número interior" {...field} onFocus={() => { }} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Código Postal
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.addresses.0.postalCode` as any}
                            rules={{ required: true }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Código Postal" {...field} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Teléfono
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.phones.0.number` as any}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <Input placeholder="Teléfono" {...field} disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />
                                </Form.Item>
                            )}
                        />
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Municipio
                        </Col>
                        <Form.Item
                            className="w-full"
                        >
                            <Input placeholder="Municipio" disabled value={leadAddress?.location?.municipality?.name} />
                        </Form.Item>

                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Localidad
                        </Col>
                        <Form.Item
                            className="w-full"
                        >
                            <Input placeholder="Localidad" disabled value={leadAddress?.location?.name} />
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Col className="align-middle px-3 mt-1">
                            Referencias
                        </Col>
                        <Controller
                            control={control}
                            name={`${formType}.addresses.0.references` as any}
                            rules={{ required: false }}
                            render={(
                                { field, fieldState }
                            ) => (
                                <Form.Item
                                    className="w-full"
                                    validateStatus={fieldState.invalid ? "error" : ""}
                                >
                                    <TextArea
                                        {...field}
                                        placeholder="Referencias"
                                        ref={field.ref}
                                        disabled={formType === "titular" ? watch("isRenovation") : useTheSameEndorsement} />
                                </Form.Item>
                            )}
                        />
                    </Col>
                </>
            }
        </Row >
    );
}