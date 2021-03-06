import React from 'react';
import PropTypes from 'prop-types';
import { Form, Grid } from 'patternfly-react';

export const FormField = ({
  input,
  label,
  required,
  controlId,
  type,
  meta: { touched, error },
  ...props
}) => {
  const formGroupProps = { key: { label }, controlId, ...props };

  if (touched && error) formGroupProps.validationState = 'error';

  return (
    <Form.FormGroup {...formGroupProps}>
      <Grid.Col componentClass={Form.ControlLabel} sm={2}>
        {label}
        {required && ' *'}
      </Grid.Col>
      <Grid.Col sm={9}>
        <Form.FormControl
          {...input}
          type={type}
          componentClass={type === 'text' ? undefined : type}
        />
        {touched && error && <Form.HelpBlock>{error}</Form.HelpBlock>}
      </Grid.Col>
    </Form.FormGroup>
  );
};

FormField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  required: PropTypes.bool,
  controlId: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};
