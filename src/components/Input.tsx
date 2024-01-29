import React, { ChangeEvent, useState } from 'react';
import "./Input.scss";
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack } from "@mui/material";

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

type Props = {
  input: Field;
};


const Input = (props: Props) => {

  const [selectedValue, setSelectedValue] = React.useState('');
  const [radioButtonValues, setradioButtonValues] = React.useState(props?.input?.options);

  const [panCardValidation, setpanCardValidation] = useState(false);
  const [input, setinput] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let handleData: any = radioButtonValues;
    const updatedOptions = handleData.map((option: any) => ({
      ...option,
      checked: option.label === event.target.value,
    }));
    setradioButtonValues(updatedOptions);
  };

  const controlProps = (item: string) => ({
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  const renderInput = () => {
    switch (props?.input?.type) {
      case 'text':

        const validatePanCard = (panNumber: string) => {
          const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
          setpanCardValidation(panRegex.test(panNumber));
        }

        const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
          validatePanCard(event.target.value);
          if (props?.input?.id === 'PanNoId') {
            setinput(event.target.value.toLocaleUpperCase())
          } else {
            setinput(event.target.value);
          }
        };

        return (
          <div className="input-group-container">
            <div className="input-group">
              <div className="input-group-label-container">
                <label className="input-group-label">{props?.input?.label}</label>
                <label className="input-group-label-required">*</label>
              </div>
              <input
                type="text"
                className="input-group-input"
                value={input}
                minLength={props?.input?.minLength}
                maxLength={props.input?.maxLength}
                id={props?.input?.id}
                placeholder="Enter a value"
                onChange={handleInputChange}
              />
            </div>
            {
              props?.input?.id === 'PanNoId' ?
                (panCardValidation &&
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8832/8832119.png"
                    height="30"
                    alt=""
                    loading="lazy"
                  />)
                : null
            }
          </div>
        );

      case 'number':
        return (
          <div className="input-group-container">
            <div className="input-group">
              <div className="input-group-label-container">
                <label className="input-group-label">{props?.input?.label}</label>
                <label className="input-group-label-required">*</label>
              </div>
              <input
                type="number"
                min={Number(props?.input?.min)}
                max={Number(props.input?.max)}
                className="input-group-input"
                id={props?.input?.id}
                placeholder="Enter a value"
              />
            </div>
          </div>
        );


      case 'dropdown':
        return <div className="input-group custom-dropdown">
          <div className="input-group-label-container">
            <label className="input-group-label">{props?.input?.label}</label>
            <label className="input-group-label-required">*</label>
          </div>
          <select className="dropdown-select" id={props?.input?.id}>
            <option className="dropdown-select-option" value="option1">Option 1</option>
            <option className="dropdown-select-option" value="option2">Option 2</option>
            <option className="dropdown-select-option" value="option3">Option 3</option>
          </select>
        </div>

      case 'checkBox':

        return (
          <div className="check-box-main">
            <label className="check">
              <input type="checkbox" />
              <div className="box">
              </div>
            </label>
            <label className="input-group-label">{props?.input?.label}</label>
          </div>

        )

      case 'radios':

        return <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{props?.input?.label}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {
              radioButtonValues?.map((_data: Option, index: number) =>
                <FormControlLabel key={index} value={_data.label} control={<Radio checked={_data.checked} style={{ color: '#f58722' }} {...controlProps(_data.label)} sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 20,
                  },
                }} />} label={_data.label} />
              )
            }
          </RadioGroup>
        </FormControl>;

      case 'slider':
        return (
          <div className="sliderContainer">
            <div className="input-group-label-container">
              <label className="input-group-label">{props?.input?.label} <label className="input-group-required">*</label></label>
            </div>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <p className="slider-min-valie">10</p>
              <Slider min={10} max={1000} size="small" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
              <p className="slider-min-valie">1000</p>
            </Stack>
          </div>
        )

      default:
        return null;
    }
  };

  return <div>{renderInput()}</div>;
};

export default Input;
