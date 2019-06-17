import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { addUser } from '../../actions/users';

const initialState = {
    country: '',
    state: '',
    city: '',
    errors: {}
};

class AddUserForm extends Component {
    state = initialState;

    updateCountry = event => {
        const { errors } = this.state;
        this.setState({
            country: String(event.target.value),
            state: '',
            city: '',
            errors: {
                ...errors,
                country: false,
                state: false,
                city: false
            }
        });
    };

    updateState = event => {
        const { errors } = this.state;
        this.setState({
            state: String(event.target.value),
            city: '',
            errors: {
                ...errors,
                state: false,
                city: false
            }
        });
    };

    updateCity = event => {
        const { errors } = this.state;
        this.setState({
            city: String(event.target.value),
            errors: {
                ...errors,
                city: false
            }
        });
    };

    onSubmit = (event, values, resetFn) => {
        event.preventDefault();
        const { country, state, city } = this.state;
        const form = event.target;
        const inputs = Array.from(form.elements);
        const inputErrors = inputs
            .filter(el => el.name)
            .reduce((errors, { validity: { valid }, name }) => ({
                ...errors,
                [name]: !valid
            }), {});
        const errors = {
            ...inputErrors,
            country: country === '',
            state: state === '',
            city: city === ''
        };

        if (!Object.values(errors).some(val => val)) {
            this.props.addUser({
                ...values,
                country_id: country,
                state_id: state,
                city_id: city
            });
            resetFn();
            this.setState(initialState);
        }

        this.setState({ errors });
    };

    render () {
        const { countries, states, cities } = this.props;
        const { country, state, city, errors } = this.state;

        return (
            <Form
                onSubmit={this.onSubmit}
                initialValues={{ address: null, about_me: null }}
                render={({ values, reset }) => (
                    <form onSubmit={(e) => this.onSubmit(e, values, reset)} noValidate>
                        <Field name="name">
                            {({ input }) => (
                                <TextField
                                    required
                                    error={errors.name}
                                    label="Name"
                                    placeholder="Name"
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ ...input, pattern: '[A-Za-z]+' }}
                                    fullWidth
                                />
                            )}
                        </Field>
                        <Field name="phone_number">
                            {({ input }) => (
                                <TextField
                                    required
                                    error={errors.phone_number}
                                    label="Phone"
                                    placeholder="Phone"
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ ...input, pattern: '[0-9]+' }}
                                    fullWidth
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input }) => (
                                <TextField
                                    required
                                    error={errors.email}
                                    label="Email"
                                    placeholder="Email"
                                    type = "email"
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ ...input, pattern: '^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\\.[a-zA-Z0-9]+)*$' }}
                                    fullWidth
                                />
                            )}
                        </Field>
                        <TextField
                            required
                            error={errors.country}
                            label="Country"
                            inputProps={{ name: 'country_id' }}
                            value={country}
                            margin="normal"
                            variant="outlined"
                            onChange={this.updateCountry}
                            select
                            fullWidth
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {countries.map(({ name, id }) => (
                                <MenuItem key={id} value={id}>{name}</MenuItem>
                            ))}
                        </TextField>
                        {country !== '' && (
                            <>
                                <TextField
                                    required
                                    error={errors.state}
                                    label="State"
                                    inputProps={{ name: 'state_id' }}
                                    value={state}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.updateState}
                                    select
                                    fullWidth
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {states.filter(({ country_id }) => String(country_id) === country).map(({name, id}) => (
                                        <MenuItem key={id} value={id}>{name}</MenuItem>
                                    ))}
                                </TextField>
                                {state !== '' &&  (
                                    <TextField
                                        required
                                        error={errors.city}
                                        label="City"
                                        inputProps={{ name: 'city_id' }}
                                        value={city}
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateCity}
                                        select
                                        fullWidth
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {cities.filter(({ state_id }) => String(state_id) === state).map(({name, id}) => (
                                            <MenuItem key={id} value={id}>{name}</MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </>
                        )}
                        <Field name="address" allowNull parse={value => value || null}>
                            {({ input: { value, ...restInput } }) => (
                                <TextField
                                    label="Address"
                                    placeholder="Address"
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={restInput}
                                    fullWidth
                                />
                            )}
                        </Field>
                        <Field name="about_me" allowNull parse={value => value || null}>
                            {({ input: { value, ...restInput } }) => (
                                <TextField
                                    label="About me"
                                    placeholder="About me"
                                    multiline
                                    margin="normal"
                                    variant="outlined"
                                    inputProps={{ ...restInput, maxLength: 500 }}
                                    fullWidth
                                    rowsMax={3}
                                />
                            )}
                        </Field>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                )}
            />
        );
    };
}

const mapStateToProps = ({ locations: { countries, states, cities } }) => ({ countries, states, cities });


export default connect(mapStateToProps, { addUser })(AddUserForm);

