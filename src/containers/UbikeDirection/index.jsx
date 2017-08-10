import React, {Component} from 'react';

import {
    DurationTable,
    InputAddressForm,
    GoogleMap,
} from 'components';

class UbikeDirection extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col col-lg-4">
                    </div>
                    <div className="col col-lg-4 ">
                        <InputAddressForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-4">

                    </div>
                    <div className="col col-lg-4 ">
                        <DurationTable/>
                    </div>
                </div>
                <GoogleMap/>
            </div>

        )
    }
}

export default UbikeDirection;