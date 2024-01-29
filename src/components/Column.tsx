import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import { Field } from './InputFields'
import Input from './Input';
import "./Input.scss";

type Props = {
    fields: [Field];
    index: string;
    screenWidth: number;
}

const Column = (props: Props) => {
    return (
        <MDBRow className="CustomGrid-row" key={props?.index} center={true}>
            {props?.fields.map((field: Field) => <MDBCol key={props?.index} className="CustomGrid-column" size={field.columnSpan === 1 ? (props?.screenWidth < 550 ? "8" : "4") : "8"} center={true}><Input input={field} /></MDBCol>)}
        </MDBRow>
    )
}

export default Column