import { Fragment } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = (props) => {

    return (
      <Fragment>
        <div  id="photo">
          <MapContainer
            className="map"
            center={[51.505, -0.09]}
            zoom={10}
            style={{ height: 300, width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </Fragment>
    );
}
export default Map;
