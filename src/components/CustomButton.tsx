import * as React from 'react';
import './Input.scss'
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/Save';
import RightIcon from '@mui/icons-material/ArrowRight';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export interface IButtonProps {
}

export function CustomButton(props: IButtonProps) {
    return (
        <div className="button">
            <div>
                <button className="button-back" type="button">Back</button>
            </div>
            <div>
                <Button component="label" style={{
                    backgroundColor: '#faf5eb',
                    color: '#f5953e',
                    boxShadow: '0px 0px transparent !important'
                }} variant="contained" startIcon={<CloudUploadIcon />}>
                    Save
                    <VisuallyHiddenInput type="file" />
                </Button>
                <Button style={{
                    backgroundColor: '#f5953e',
                    color: '#faf5eb',
                    boxShadow: '0px 0px transparent !important',
                    marginLeft: '10px'
                }} component="label" variant="contained" startIcon={<RightIcon />}>
                    Save & Next  <VisuallyHiddenInput type="file" />
                </Button>
            </div>
        </div>
    );
}
