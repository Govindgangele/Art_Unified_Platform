import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

import {
  LocateFixed,
  Search,
} from "lucide-react";

// Fix default marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const defaultCenter = {

  lat: 23.3441,

  lng: 85.3096,

};

function LocationMarker({
  position,
  setPosition,
}) {

  useMapEvents({

    click(e) {

      setPosition(e.latlng);

    },

  });

  return <Marker position={position} />;

}

const RadiusSearch = ({ onSearch }) => {

  const [position, setPosition] =
    useState(defaultCenter);

  const [radius, setRadius] =
    useState(20);

  const getCurrentLocation = () => {

    navigator.geolocation.getCurrentPosition(

      (pos) => {

        setPosition({

          lat: pos.coords.latitude,

          lng: pos.coords.longitude,

        });

      },

      () => {

        alert("Location permission denied.");

      }

    );

  };

  return (

    <section className="max-w-7xl mx-auto px-6 mt-10">

      <div className="bg-[#0B1120] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-3xl font-bold text-white">

          Find Artists Nearby

        </h2>

        <p className="text-gray-400 mt-2 mb-6">

          Select a location on the map or use your current location.

        </p>

        {/* Map */}

        <div className="rounded-2xl overflow-hidden">

          <MapContainer

            center={position}

            zoom={10}

            style={{

              height: "400px",

              width: "100%",

            }}

          >

            <TileLayer

              attribution='&copy; OpenStreetMap contributors'

              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            <LocationMarker

              position={position}

              setPosition={setPosition}

            />

          </MapContainer>

        </div>

        {/* Coordinates */}

        <div className="grid md:grid-cols-2 gap-4 mt-6">

          <div>

            <label className="text-gray-400 text-sm">

              Latitude

            </label>

            <input

              readOnly

              value={position.lat.toFixed(6)}

              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl p-3 text-white"

            />

          </div>

          <div>

            <label className="text-gray-400 text-sm">

              Longitude

            </label>

            <input

              readOnly

              value={position.lng.toFixed(6)}

              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl p-3 text-white"

            />

          </div>

        </div>

        {/* Current Location */}

        <button

          onClick={getCurrentLocation}

          className="mt-6 flex items-center gap-3 bg-[#111827] border border-gray-700 hover:border-blue-500 transition px-6 py-3 rounded-xl"

        >

          <LocateFixed size={20} />

          Use My Current Location

        </button>

        {/* Radius */}

        <div className="mt-8">

          <div className="flex justify-between">

            <span className="text-white font-medium">

              Search Radius

            </span>

            <span className="bg-blue-600 px-4 py-1 rounded-full">

              {radius} km

            </span>

          </div>

          <input

            type="range"

            min={5}

            max={100}

            step={5}

            value={radius}

            onChange={(e) =>
              setRadius(Number(e.target.value))
            }

            className="w-full mt-4"

          />

        </div>

        {/* Search */}

        <button

          onClick={() =>
            onSearch(position, radius)
          }

          className="mt-8 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl text-white font-semibold hover:scale-[1.02] transition"

        >

          <Search size={20} />

          Search Nearby Artists

        </button>

      </div>

    </section>

  );

};

export default RadiusSearch;