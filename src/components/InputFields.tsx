import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import inputs from "../assets/data.json";
import Input from "./Input";
import "./Input.scss";
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CustomButton } from "./CustomButton";
import Column from "./Column";


export interface Field {
  id: string;
  repeaterGroup?: string;
  type: string;
  label: string;
  min: null;
  max: null;
  minLength: number;
  maxLength: number;
  required: boolean;
  disabled: boolean;
  columnSpan?: number;
  repeaters?: boolean;
  repeaterRow?: number;
  formCategory?: string;
  options?: [Option];
  row?: number;
  checked?: boolean;
}

export interface Option {
  label: string;
  checked: boolean;
}

interface GroupedFields {
  FormInput: Field[];
  FormCategory: Field[];
  repeaterGroups: { [group: string]: Field[] };
}

const InputFields = () => {
  const [groupedFields, setGroupedFields] = useState<GroupedFields>({
    FormInput: [],
    FormCategory: [],
    repeaterGroups: {},
  });

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount



  useEffect(() => {
    function groupFields(fields: Field[]) {
      const grouped: any = {
        FormInput: [],
        FormCategory: [],
        repeaterGroups: {},
      };

      fields.forEach(field => {
        const { formCategory, repeaters, repeaterGroup, row, ...rest } = field;

        if (formCategory) {
          // Use row directly as a number
          const rowValue = Number(row);

          if (!grouped.FormCategory[rowValue]) {
            grouped.FormCategory[rowValue] = [];
          }

          grouped.FormCategory[rowValue].push({ ...rest, row: rowValue });
        } else if (repeaters) {
          if (repeaterGroup !== undefined) {
            if (!grouped.repeaterGroups[repeaterGroup]) {
              grouped.repeaterGroups[repeaterGroup] = [];
            }

            grouped.repeaterGroups[repeaterGroup].push({ ...rest, row });
          }
        } else {
          // Use row directly as a number
          const rowValue = Number(row);

          if (!grouped.FormInput[rowValue]) {
            grouped.FormInput[rowValue] = [];
          }

          grouped.FormInput[rowValue].push({ ...rest, row: rowValue });
        }
      });

      return grouped;
    }
    let data: any = inputs;
    const groupedResult = groupFields(data);
    setGroupedFields(groupedResult);
  }, []);

  const handleRemoveGroup = (groupName: string) => {
    let filteredData = Object.entries(groupedFields.repeaterGroups).filter((Group: any, index: any) => Group[0] !== groupName);
    let g = Object.fromEntries(filteredData);
    setGroupedFields((prevState) => ({
      ...prevState,
      repeaterGroups: g
    }));
  };


  return (
    <MDBContainer className="CustomGrid">
      {Object.entries(groupedFields.FormInput).map(([index, fields]: any) => {
        return <Column fields={fields} index={index} screenWidth={screenWidth} key={index} />
      })}

      <div onClick={() => {
        let group = `Group${Object.entries(groupedFields.repeaterGroups).length + 1}`;
        setGroupedFields({
          ...groupedFields, repeaterGroups: {
            ...groupedFields.repeaterGroups,
            [group]: [
              {
                "id": "RField1Id",
                "repeaterGroup": group,
                "type": "text",
                "label": "RField1",
                "min": null,
                "max": null,
                "minLength": 5,
                "maxLength": 30,
                "required": true,
                "disabled": false,
                "columnSpan": 1,
                "repeaters": true,
                "repeaterRow": 1
              },
              {
                "id": "RField2Id",
                "repeaterGroup": group,
                "type": "text",
                "label": "RField2",
                "min": null,
                "max": null,
                "minLength": 5,
                "maxLength": 30,
                "required": true,
                "disabled": false,
                "columnSpan": 1,
                "repeaters": true,
                "repeaterRow": 1
              },
              {
                "id": "RField13d",
                "repeaterGroup": group,
                "type": "text",
                "label": "RField3",
                "min": null,
                "max": null,
                "minLength": 5,
                "maxLength": 30,
                "required": true,
                "disabled": false,
                "columnSpan": 1,
                "repeaters": true,
                "repeaterRow": 1
              },
              {
                "id": "RField4Id",
                "repeaterGroup": group,
                "type": "text",
                "label": "RField4",
                "min": null,
                "max": null,
                "minLength": 5,
                "maxLength": 30,
                "required": true,
                "disabled": false,
                "columnSpan": 1,
                "repeaters": true,
                "repeaterRow": 1
              }
            ],
          }
        })
      }} className="plus-icon">
        <p className="plus-icon-symbol">+</p>
      </div>

      {Object.entries(groupedFields.repeaterGroups).map((Group: any, index: any) => {
        let i = Group[1];
        let g = Group[0];

        return <MDBRow className="CustomGrid-row deleteContainer" center={true}>
          <div className="repeator-number">
            <p>{g.substr(g.length - 1)}. </p>
          </div>
          {
            i.map((field: Field, index: null | undefined) => (
              <MDBCol className="CustomGrid-column" size={screenWidth < 550 ? "8" : "3"} center={true}><Input input={field} /></MDBCol>
            ))
          }
          <div className="delete-icon">
            <img onClick={() => handleRemoveGroup(g)} className="delete-icon-image" src={'https://cdn-icons-png.flaticon.com/128/6048/6048004.png'} height="10" alt="" loading="lazy" />
          </div>
        </MDBRow>
      })}

      <Accordion className='customAccordian' expanded={expanded === 'true'} onChange={handleChange('true')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='customAccordian-IconContainer'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Visibility
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='customAccordian-detailsContainer'
        >
          {Object.entries(groupedFields.FormCategory).map(([index, fields]: any) => {

            return <MDBRow className="CustomGrid-Accordina-row" key={index} center={true}>
              {fields.map((field: Field, index: null | undefined) => (
                <MDBCol className="CustomGrid-column" size={screenWidth < 550 ? "8" : "4"}><Input input={field} /></MDBCol>
              ))}
            </MDBRow>

          })}

        </AccordionDetails>
      </Accordion>

      <CustomButton />
    </MDBContainer>
  );
};

export default InputFields;