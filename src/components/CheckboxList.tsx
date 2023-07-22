import React, { ReactNode, useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, FormGroupProps, FormLabel, IconButton, Paper, PaperProps, Stack, TextField, TextFieldProps, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type CheckboxOptionValue = string | number;

interface CheckboxOption {
  label: string;
  value: CheckboxOptionValue;
}

interface CheckboxListProps extends Omit<FormGroupProps, 'onChange'> {
  options: CheckboxOption[];
  listLabel?: ReactNode;
  onChange?: (values: CheckboxOptionValue[] | null) => any;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  options = [],
  listLabel,
  onChange,
  ...rest
}) => {
  const [values, setValues] = useState<CheckboxOptionValue[] | null>(null);
  
  const handleChange = (checked: boolean, value: CheckboxOption['value']) => {
    if (values === null && checked) {
      setValues([value]);
    } else if (values !== null && checked) {
      setValues([...values, value]);
    } else if (values !== null && !checked) {
      const newValues = values.filter((v) => v !== value);
      if (newValues.length > 0) {
        setValues(newValues);
      } else {
        setValues(null);
      }
    }
  };

  useEffect(() => {
    if (onChange) onChange(values);
  }, [values]);

  return (
    <FormGroup {...rest}>
      {listLabel && <FormLabel>{listLabel}</FormLabel>}
      {options.map((option, i) => (
        <FormControlLabel
          control={<Checkbox value={option.value} onChange={(e, checked) => handleChange(checked, option.value)}/>}
          label={option.label}
        />
      ))}
    </FormGroup>
  );
}