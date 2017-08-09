import React, {Component} from 'react';

import {
    InputAddressForm,
} from 'components';

class UbikeDirection extends Component {

    render() {
        return (
            <div className="row">
                <div className="col col-lg-4">
                </div>
                <div className="col col-lg-4 ">
                   <InputAddressForm/>
                </div>
            </div>
        )
    }
}

export default UbikeDirection;