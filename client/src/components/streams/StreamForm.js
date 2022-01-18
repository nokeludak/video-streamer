import React from 'react'
import { Form, Field } from 'react-final-form'

const StreamForm = ({ initialValues, onSubmitCallback }) => {
    

    const renderError = ({ error, touched }) =>
        touched && error ? (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        ) : null

    const renderInput = ({ input, label, meta }) => {
        // console.log('meta', meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {renderError(meta)}
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log('formValues', formValues)
        onSubmitCallback(formValues)
    }

    const validate = (formValues) => {
        const error = {}
        if (!formValues.title) {
            error.title = 'You must enter a Title'
        }
        if (!formValues.description) {
            error.description = 'You must enter a description'
        }

        return error
    }

    const render = ({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="ui form error">
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button className="ui black basic">Submit</button>
        </form>
    )

    return (
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={render}
        />
    )
}

export default StreamForm


