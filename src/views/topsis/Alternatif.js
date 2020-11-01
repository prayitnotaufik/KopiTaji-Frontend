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

const Alternatif = (props) => {
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
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Input Data Alternatif</ModalHeader>
            <ModalBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Nama Alternatif</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Masukkan Nama Alternatif"
                    />
                    {/* <CFormText>This is a help text</CFormText> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Kadar Air</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Masukkan Jumlah Kadar Air"
                    />
                    <CFormText>(Kadar Air untuk biji kopi biasanya antara 12,55% - 14%)</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Kadar Kotoran</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Masukkan Jumlah Kadar Kotoran"
                    />
                    <CFormText>(Kadar Kotoran antara 1% - 15%)</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Aroma Busuk</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Tidak Berbau</option>
                      <option value="1">Agak Berbau</option>
                      <option value="2">Sangat Berbau</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Serangga Hidup</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Banyak</option>
                      <option value="1">Sedikit</option>
                      <option value="2">Tidak Ada</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={toggle}>
                Simpan
              </Button>{" "}
              <Button color="danger" onClick={toggle}>
                Batal
              </Button>
            </ModalFooter>
          </Modal>

          <h2 className="text-center">Tabel Data Mentah</h2>
          <br />
          <CButton color="success" onClick={toggle}>
            +Tambah{buttonLabel}
          </CButton>
          {/* <DocsLink name="CModal"/> */}
        </CCardHeader>
        <CCardBody>
          <CDataTable items={TopsisData} fields={fields} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Alternatif;

// }
