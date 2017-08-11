import React, {Component} from 'react';

import styles from './DurationTable.css';

class DurationTable extends Component {
    render() {
        return (
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Section</th>
                        <th>Duration(min)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><div className="section-column">Origin  <span className="circle-word-waypoint">A</span>  to Ubike Rental Station <span className="circle-word-waypoint">B</span></div></td>
                        <td id="a2b-duration"></td>
                    </tr>
                    <tr>
                        <td><div className="section-column">Ubike Rental Station <span className="circle-word-waypoint">B</span> to Ubike Returning Station <span className="circle-word-waypoint">C</span></div></td>
                        <td id="b2c-duration"></td>
                    </tr>
                    <tr>
                        <td><div className="section-column">Ubike Returning Station <span className="circle-word-waypoint">C</span> to Destination <span className="circle-word-destination">D</span></div></td>
                        <td id="c2d-duration"></td>
                    </tr>

                    <tr className="info">

                        <td>Total Duration</td>
                        <td id="total-duration"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DurationTable;

