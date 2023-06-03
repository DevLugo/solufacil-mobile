import React, { useState, useEffect } from "react";
import { Modal, Button, Steps, message, Input, DatePicker } from "antd";
import { UserOutlined, TeamOutlined, DollarOutlined, SolutionOutlined } from '@ant-design/icons';
import "./index.css";
import { FormProvider, useForm } from "react-hook-form";
import PersonalDataForm from "./Steps/PersonalData/PersonalData";
import Resume from "./Steps/Resume";
import LoanConf from "./Steps/LoanConf";
import dayjs, { Dayjs } from "dayjs";

import { GetEmployee_getEmployee } from "../../../graphql/queries/__generated__/getEmployee";
import { AddressCreateWithoutLocalInput, PhoneCreateManyPersonalDataInput } from "../../../__generated__/globalTypes";
import { useAppDispatch } from "../../../store";
import { grantLoan } from "../../../store/newLoanListSlice";
const { TextArea } = Input;
export interface LoanPersonalDataForm {
    borrowerId?: string;
    firstName: string;
    lastName: string;
    addresses: AddressCreateWithoutLocalInput[];
    phones: PhoneCreateManyPersonalDataInput[];
    birthDate?: Dayjs;
}
export interface LoanForm {
    isRenovation: boolean
    titular: LoanPersonalDataForm
    endorsement: LoanPersonalDataForm
    loan: {
        firstPaymentDate: Dayjs;
        amountToPay: Number;
        amountToDeliver: Number;
        loan: loanTypes_loanTypes | undefined;
        lastPaymentDate: Dayjs;
        loanTypeId: string | undefined;
        // Select the contractType in base of the user type. If is lead then will be 10 weeks and 0%
        contractTypeId: string;
        //Todo: connect the employee on the backend
    }
}
type Props = {
    display: boolean
    setDisplay: (display: boolean) => void
    lead?: GetEmployee_getEmployee;

}
const CreateLoan = (props: Props) => {
    /*     const [isRenovation, setIsRenovation] = useState<boolean>(false);
     */
    const dispatch = useAppDispatch();
    const { display, setDisplay, lead } = props;
    const [current, setCurrent] = useState<number>(0);
    const [modalFooter, setModalFooter] = useState<any[]>([])
    const methods = useForm<LoanForm>({
        mode: "all",
        defaultValues: {
            loan: {
                firstPaymentDate: dayjs().add(7, "days"),
                amountToPay: 0,
                amountToDeliver: 0,
                loanTypeId: undefined,
                // Select the contractType in base of the user type. If is lead then will be 10 weeks and 0%
                contractTypeId: undefined,
                //Todo: connect the employee on the backend
            }
        }
    });

    const saveLoan = () => {
        dispatch(
            grantLoan(
                methods.getValues()
            )
        )
    }
    useEffect(() => {
        scrollUp()
    }, [current])

    const next = () => {
        setCurrent(current + 1);
    };

    const goToPage = (pageNumber: number) => {
        setCurrent(pageNumber);
    };


    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            content: <PersonalDataForm
                lead={lead}
                type="titular"
                key="personalDataCliente"
                next={next}
                prev={prev}
                currentStep={current}
                setModalFooter={setModalFooter}
            />
        },
        {
            content: <PersonalDataForm
                lead={lead}
                type="endorsement"
                key="personalDataEndorsement"
                next={next}
                prev={prev}
                currentStep={current}
                setModalFooter={setModalFooter}
            />
        },
        {
            content: <LoanConf
                next={next}
                prev={prev}
                setModalFooter={setModalFooter}
            /* currentStep={current} */
            />,
        },
        {
            content: <Resume
                goToPage={goToPage}
                lead={lead}
                next={next}
                prev={prev}
                setModalFooter={setModalFooter}
                saveLoan={saveLoan}
            />
        },
    ];

    const items = steps.map((item, idx) => ({ key: idx, title: "" }));
    const contentStyle: React.CSSProperties = {
        marginTop: 16,
        height: '65vh',
        overflowY: 'scroll',
        overflowX: 'hidden'
    };
    const scrollUp = () => {
        const element = document.getElementById('contentModal');
        if (element) element.scrollTop = 0;
    }
    return (
        <Modal
            title="Modal 1000px width"
            centered
            open={display}
            onOk={() => setDisplay(false)}
            onCancel={() => setDisplay(false)}
            width={1000}
            footer={modalFooter}
        >
            <FormProvider {...methods}>
                <form
                >
                    <Steps current={current} items={items} />
                    <div id="contentModal" style={contentStyle}>{steps[current].content}</div>
                </form>
            </FormProvider>
        </Modal >
    );
};
export default CreateLoan;