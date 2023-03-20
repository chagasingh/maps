import * as React from 'react';
import './Cube2.css'
import Cube from 'react-3d-cube';

class LogoCube2 extends React.Component {
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
            
              </Cube>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default LogoCube2