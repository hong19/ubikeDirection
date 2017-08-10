import React, {Component}  from 'react';

import {UbikeDirection} from 'containers';
import Title from 'Title';


class Layout extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Title/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <UbikeDirection/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;

