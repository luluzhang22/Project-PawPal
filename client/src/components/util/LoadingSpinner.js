import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const LoadingSpinner = () => (
    <div>
        <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status="loading"
            style={{position: 'relative'}}
        />
    </div>
);

export default LoadingSpinner;
