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
    CSwitch
  } from "@coreui/react";
  
  import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
  import props from "prop-types";
  
  import React, { useState, Component } from "react";
  import { DocsLink } from "src/reusable";
  import {
    TopsisData,
    Normalisasi,
    NormalisasiBobot,
    Ideal,
    JarakAlternatif,
  } from "../users/TopsisData";
  
  import usersData from "../users/TopsisData";
  
  const HitungMoora = (props) => {
    const { buttonLabel, className } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    const fields = ["Alternatif", "C1", "C2", "C3", "C4"];
    const ideal = ["C1", "C2", "C3", "C4"];
    const jarak = ["Alternatif", "Jarak"];
  
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
            <CDataTable items={Normalisasi} fields={fields} pagination />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Normalisasi Bobot
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={NormalisasiBobot} fields={fields} pagination />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Ideal Positif
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={Ideal} fields={ideal} pagination />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Ideal Negatif
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={Ideal} fields={ideal} pagination />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Jarak Alternatif Positif
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={JarakAlternatif} fields={jarak} pagination />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            Jarak Alternatif Negatif
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable items={JarakAlternatif} fields={jarak} pagination />
          </CCardBody>
        </CCard>
      </div>
    );
  };
  
  export default HitungMoora;
  
  // }
  