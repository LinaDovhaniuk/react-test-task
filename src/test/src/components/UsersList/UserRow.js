import React from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { format } from 'date-fns';

function UserRow({countryName, stateName, cityName, user}) {
    return (
        <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone_number}</TableCell>
            <TableCell>{countryName}</TableCell>
            <TableCell>{stateName}</TableCell>
            <TableCell>{cityName}</TableCell>
            <TableCell>{format(new Date(user.createdAt), 'MMM D, YYYY')}</TableCell>
        </TableRow>
    )
}

const mapStateToProps =  ({ locations }, { user: {country_id, state_id, city_id} }) => ({
    countryName: (locations.countries.find( ({id}) => Number(country_id) === Number(id) || {})).name,
    stateName: (locations.states.find( ({id}) => Number(state_id) === Number(id)) || {}).name,
    cityName: (locations.cities.find( ({id}) => Number(city_id) === Number(id)) || {}).name
});

export default connect(mapStateToProps)(UserRow);