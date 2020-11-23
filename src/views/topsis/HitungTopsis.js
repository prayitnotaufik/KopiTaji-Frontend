import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CDataTable,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import props from "prop-types";

import React, { useState, Component, useEffect } from "react";
import { DocsLink } from "src/reusable";
import {
  TopsisData,
  Normalisasi,
  NormalisasiBobot,
  Ideal,
  JarakAlternatif,
} from "../users/TopsisData";

import axios from "axios";
import usersData from "../users/TopsisData";

const HitungTopsis = (props) => {
  const { buttonLabel, className } = props;

  const [alter, setAlterName] = useState([]);
  const [normalized, topsisNormalized] = useState([]);
  const [optimized, optimationWeight] = useState([]);
  const [idpos, idealPositive] = useState([]);
  const [idneg, idealNegative] = useState([]);
  const [altpos, alternativePositive] = useState([]);
  const [altneg, alternativeNegative] = useState([]);

  useEffect(() => {
    getAlterName();
    checkData();
  }, [alter]);

  const checkData = async () => {
    axios.get(`http://localhost:1998/api/topsis/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "topsisNormalized") {
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
          topsisNormalized(objek);
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
        } else if (d === "idPos") {
          let objek = [{}];
          data[d].forEach((i, b) => {
            objek[0]["C" + (b + 1)] = i;
          });
          idealPositive(objek);
        } else if (d === "idNeg") {
          let objek = [{}];
          data[d].forEach((i, b) => {
            objek[0]["C" + (b + 1)] = i;
          });
          idealNegative(objek);
        } else if (d === "altPos") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({ alternatif: alter[b].alternatif, jarak: i });
            }
          });
          alternativePositive(objek);
        } else if (d === "altNeg") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (alter[b] !== undefined) {
              objek.push({ alternatif: alter[b].alternatif, jarak: i });
            }
          });
          alternativeNegative(objek);
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
  const fieldsAlt = ["alternatif", "jarak"];
  const ideal = ["C1", "C2", "C3", "C4"];

  return (
    <div className="animated fadeIn">
      <CCard>
        <CCardHeader>
          {/* <Button color="danger" onClick={toggle}> BUTTON
              {buttonLabel}
            </Button> */}
          <h2 className="text-center">Perhitungan Topsis</h2>
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
          Ideal Positif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={idpos} fields={ideal} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Ideal Negatif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={idneg} fields={ideal} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Jarak Alternatif Positif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={altpos} fields={fieldsAlt} pagination />
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          Jarak Alternatif Negatif
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={altneg} fields={fieldsAlt} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default HitungTopsis;

// }
