import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getAllUsers } from '../../actions/users';
import { getAllCountries, getAllCities, getAllStates } from '../../actions/locations';
import UserRow from './UserRow';

class UsersTable extends Component {

    componentDidMount() {
        this.props.getAllCountries();
        this.props.getAllCities();
        this.props.getAllStates();
        this.props.getAllUsers();
    }

    render () {
        const { users } = this.props;

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Created at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { users.map( (user) =>
                        <UserRow key = { user.id } user = {user} />
                    )}
                </TableBody>

            </Table>)
    };
}


const mapStateToProps = ({ users }) => ({ users });

export default connect(
    mapStateToProps,
    { getAllUsers, getAllCountries, getAllCities, getAllStates }
)(UsersTable);

