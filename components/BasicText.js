import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const BasicText = ({value}) => (
    <Text>{value}</Text>
);

BasicText.propTypes = {
    value: PropTypes.string,
};


BasicText.defaultProps = {
    value: 'Nothing Here',
};

export default BasicText;
