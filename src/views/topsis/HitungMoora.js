import { CCard, CCardBody, CCardHeader, CDataTable } from "@coreui/react";

import React, { useState, useEffect } from "react";
import axios from "axios";

const HitungMoora = (props) => {
  const [alter, setAlterName] = useState([]);
  const [normalized, mooraNormalized] = useState([]);
  const [optimized, optimationWeight] = useState([]);
  const [yi, yiMatrix] = useState([]);

  useEffect(() => {
    getAlterName();
    checkData();
  }, [alter]);

  const checkData = async () => {
    axios.get(`http://localhost:1998/api/moora/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "mooraNormalized") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                alternatif: alter[b].alternatif,
                kriteria_air: i[0],
                kriteria_kotoran: i[1],
                kriteria_serangga: i[2],
                kriteria_bau: i[3],
              });
            }
          });
          mooraNormalized(objek);
        } else if (d === "optimized") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                alternatif: alter[b].alternatif,
                kriteria_air: i[0],
                kriteria_kotoran: i[1],
                kriteria_serangga: i[2],
                kriteria_bau: i[3],
              });
            }
          });
          optimationWeight(objek);
        } else if (d === "yi") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({
                alternatif: alter[b].alternatif,
                max: i[0],
                min: i[1],
                yi: i[2],
              });
            }
          });
          yiMatrix(objek);
        }
      });
    });
  };

  const getAlterName = async () => {
    axios.get(`http://localhost:1998/api/alternatif/`).then((res) => {
      let alt = res.data.result;
      setAlterName(alt);
    });
  };

  const fields = [
    "alternatif",
    "kriteria_air",
    "kriteria_kotoran",
    "kriteria_serangga",
    "kriteria_bau",
  ];
  const yiFields = ["alternatif", "max", "min", "yi"];

  return (
    <div className="animated fadeIn">
      <CCard>
        <CCardHeader>
          {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
          <h2 className="text-center">Perhitungan Moora</h2>
          <br />
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
      </CCard>
      <CCard>
        <CCardHeader>
          Normalisasi
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={normalized} fields={fields} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Normalisasi Bobot
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={optimized} fields={fields} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Matrix Yi
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={yi} fields={yiFields} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default HitungMoora;

// }
