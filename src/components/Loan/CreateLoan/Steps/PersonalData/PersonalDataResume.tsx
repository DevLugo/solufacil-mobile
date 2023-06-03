import { Descriptions, Select, Steps } from "antd";
import { GetEmployee_getEmployee } from "../../../../../graphql/queries/__generated__/getEmployee";
import { useState, useEffect } from "react";

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
    data: GetEmployee_getEmployee
    lead: GetEmployee_getEmployee | undefined
}
export default function PersonalDataResume(props: Props) {
    const { data, lead } = props;
    const [leadAddress, setLeadAddress] = useState<GetEmployee_getEmployee | undefined>(undefined);
    useEffect(() => {
        setLeadAddress(lead?.user?.employee?.personalData?.addresses.length ?
            lead?.user.employee.personalData.addresses[0] : null);
    }, [lead])
    return (
        <Descriptions
            bordered
            size={"small"}
        >
            <Descriptions.Item label="Nombres">{data.firstName}</Descriptions.Item>
            <Descriptions.Item label="Apellidos">{data.lastName}</Descriptions.Item>
            <Descriptions.Item label="Calle">{data.addresses[0].street} </Descriptions.Item>
            <Descriptions.Item label="N[umero Exterior">#{data.addresses[0].exteriorNumber}</Descriptions.Item>
            <Descriptions.Item label="N[umero Interior">#{data.addresses[0].interiorNumber}</Descriptions.Item>
            <Descriptions.Item label="Referencias">{data.addresses[0].references}</Descriptions.Item>
            <Descriptions.Item label="Código Postal">{data.addresses[0].postalCode}</Descriptions.Item>
            <Descriptions.Item label="Localidad">{leadAddress?.location?.name}</Descriptions.Item>
            <Descriptions.Item label="Municipio">{leadAddress && leadAddress?.location?.municipality?.name}</Descriptions.Item>
            <Descriptions.Item label="Estado">{leadAddress && leadAddress?.location?.state?.name}</Descriptions.Item>
            <Descriptions.Item label="Teléfono">{data.phones[0].number}</Descriptions.Item>
            <Descriptions.Item label="Fecha Nacimiento">{data.birthDate.format('DD/MM/YYYY')}</Descriptions.Item>
        </Descriptions>
    );
}