import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CDataTable,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Alternatif = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [list, setDataAlter] = useState([]);
  const [array, setNewAlter] = useState({
    alternatif: null,
    kriteria_air: null,
    kriteria_kotoran: null,
    kriteria_serangga: "Tidak Ada",
    kriteria_bau: "Tidak Berbau",
  });

  const toggle = () => setModal(!modal);

  const handleChange = (value, name) => {
    if (name === "kriteria_air" || name === "kriteria_kotoran") {
      value = value / 100;
    } else {
      console.log(value);
    }
    setNewAlter({ ...array, [name]: value });
  };

  const addAlter = (array) => {
    axios.post(`http://localhost:1998/api/alternatif/`, array).then((res) => {
      toggle();
    });
  };

  useEffect(() => {
    checkData();
  }, [list]);

  const checkData = async () => {
    axios.get(`http://localhost:1998/api/alternatif/`).then((res) => {
      let alt = res.data.result;
      setDataAlter(alt);
    });
  };

  const fields = [
    "alternatif",
    "kriteria_air",
    "kriteria_kotoran",
    "kriteria_serangga",
    "kriteria_bau",
  ];

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
                      type="text"
                      id="text-input"
                      name="text-input"
                      placeholder="Masukkan Nama Alternatif"
                      onChange={(event) =>
                        handleChange(event.target.value, "alternatif")
                      }
                      defaultValue={props.alternatif}
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
                      type="text"
                      pattern="[0-9]*"
                      onChange={(event) =>
                        handleChange(event.target.value, "kriteria_air")
                      }
                      defaultValue={props.kriteria_air}
                    />
                    <CFormText>
                      (Kadar Air untuk biji kopi biasanya antara 12,55% - 14%)
                    </CFormText>
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
                      type="text"
                      pattern="[0-9]*"
                      onChange={(event) =>
                        handleChange(event.target.value, "kriteria_kotoran")
                      }
                      defaultValue={props.kriteria_kotoran}
                    />
                    <CFormText>(Kadar Kotoran antara 1% - 15%)</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Aroma Busuk</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom
                      name="select"
                      id="select"
                      onChange={(event) =>
                        handleChange(event.target.value, "kriteria_bau")
                      }
                      defaultValue={props.kriteria_bau}
                    >
                      <option value="Tidak Berbau">Tidak Berbau</option>
                      <option value="Agak Berbau">Agak Berbau</option>
                      <option value="Berbau">Berbau</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Serangga Hidup</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom
                      name="select"
                      id="select"
                      onChange={(event) =>
                        handleChange(event.target.value, "kriteria_serangga")
                      }
                      defaultValue={props.kriteria_serangga}
                    >
                      <option value="Tidak Ada">Tidak Ada</option>
                      <option value="Sedikit">Sedikit</option>S
                      <option value="Banyak">Banyak</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => addAlter(array)}>
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
          <CDataTable items={list} fields={fields} pagination />
        </CCardBody>
      </CCard>
    </div>
  );
};

export default Alternatif;

// }
