import React from 'react';
import PropTypes from 'prop-types';

const TestButton = ({label}) => {
    return (
        <button>
            custom test button label: {label}
        </button>
    );
};

TestButton.propTypes = {
    label: PropTypes.string.isRequired,
};

export default TestButton;