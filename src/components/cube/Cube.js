import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import Map from '../map';

class LogoCube extends React.Component {
  render() {
    return (
      <div>
        <center>
          <div>
            <div
              style={{
                width: 300,
                height: 300,
              }}
            >
              <Cube size={300} index="front">
                <div>
                  <Map />
                </div>
                <div>
                  <Map />
                </div>
                <div>
                  <Map />
                </div>
                <div>
                  <Map />
                </div>
                <div>
                  <Map />
                </div>
                <div>
                  <Map />
                </div>
              </Cube>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default LogoCube