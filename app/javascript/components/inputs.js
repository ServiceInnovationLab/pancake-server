import React, { Fragment } from 'react';
import { Field } from 'react-final-form';
import { map } from 'lodash';

export function SingleInput({ isReadOnly, id, label, placeholder, fullWidth, withMargin, type = 'text' }) {
  const className = fullWidth
    ? 'full-width'
    : withMargin
      ? 'flex-item'
      : 'flex-item with-margin';
  return (
    <div key={id} className={className}>
      <label htmlFor={id}>{label}</label>
      <Field
        className='rebate-search-input'
        name={`fields.${id}`}
        label= {label}
        placeholder= {placeholder}
        component='input'
        type={type}
        min={type == 'number' ? 0 : null}
        step={type == 'number' ? 0.01 : null}

        readOnly={isReadOnly}
      />
      <Error name={`fields.${id}`} />
    </div>
  );
}
export function TableInput({ id, type = 'number', isReadOnly, className }) {
  return (
    <div key={id} className={className}>
      <Field
        className='rebate-search-input'
        name={`fields.income.${id}`}
        component='input'
        type={type}
        readOnly={isReadOnly}
        min={0}
        step={0.01}
      />
      <Error name={`fields.income.${id}`} />
    </div>
  ); }

export function RadioInput({ id, label, type, isReadOnly, withMargin, values }) {
  const className = withMargin
    ? 'flex-item'
    : 'flex-item with-margin';
  return (
    <div key={id} className={className}>
      {!(id === 'moved_within_rating_year' &&
      values.fields.lived_in_property_1_July === 'yes') &&
      <Fragment>
        <label htmlFor={id}>{label}</label>
        <div className="flex-row rebate-radio-buttons radio" >
          {map([['Yes', 'yes'], ['No', 'no']], ([label, value]) =>
            <label htmlFor={`${id}-${value}`} key={`${id}-${value}`} >
              <Field
                name={`fields.${id}`}
                className='radio-inline'
                component="input"
                type={type}
                value={value}
                disabled={isReadOnly && values.fields[id] != value}
              />{' '}
              {label}
            </label>
          )}
          <Error name={`fields.${id}`} />
        </div>
      </Fragment>
      }
    </div>
  );
}

export function TextArea({ isReadOnly, id, label }) {
  return (
    <Field
      name={`fields.${id}`}
      render={({ input, meta }) => (
        <div>
          <br></br>
          <label htmlFor={id}><h3>{label}</h3></label>
          <textarea {...input} readOnly={isReadOnly} className={'full-width'} />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    />
  );
}

const Error = ({ name }) => (
  <Field name={name} subscription={{ error: true, touched: true }}>
    {({ meta: { error, touched } }) =>
      error && touched ? <span>{error}</span> : null
    }
  </Field>
);
