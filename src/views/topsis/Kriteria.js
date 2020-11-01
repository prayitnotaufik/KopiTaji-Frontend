import { CCard, CCardBody, CRow, CCol,CCardHeader, CIcon } from "@coreui/react";
import React, { Component } from "react";

export default class kriteria extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardBody>
            {/* <h4 id="traffic" className="card-title mb-0">
              Kriteria
            </h4> */}
            <CRow>
              <CCol xs="12" sm="6" md="3">
                <CCard color="primary" className="text-white">
                  {/* <CCardHeader>Card title</CCardHeader> */}
                  <CCardBody>
                    <h3 className="mt-2">Kadar Air</h3>
                    <h1 className="">33,3%</h1>
                    <h4 className="float-right mb-0">C1</h4>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="3">
                <CCard color="info" className="text-white">
                  {/* <CCardHeader>Card title</CCardHeader> */}
                  <CCardBody>
                    <h3 className="mt-2">Kadar Kotoran</h3>
                    <h1 className="">30%</h1>
                    <h4 className="float-right mb-0">C2</h4>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="3">
                <CCard color="warning" className="text-white">
                  {/* <CCardHeader>Card title</CCardHeader> */}
                  <CCardBody>
                    <h3 className="mt-2">Aroma Busuk</h3>
                    <h1 className="">33,3%</h1>
                    <h4 className="float-right mb-0">C3</h4>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="3">
                <CCard color="danger" className="text-white">
                  {/* <CCardHeader>Card title</CCardHeader> */}
                  <CCardBody>
                    <h3 className="mt-2">Serangga Hidup</h3>
                    <h1 className="">20%</h1>
                    <h4 className="float-right mb-0">C4</h4>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
