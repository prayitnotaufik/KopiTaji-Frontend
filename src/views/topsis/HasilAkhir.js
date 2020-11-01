import { CCard, CCardBody, CCardHeader,CButton,CDataTable } from "@coreui/react";
import React, { Component } from "react";
import {hasilAkhir} from "../users/TopsisData";

const fields = ['Alternatif','Skor', 'Rank'];

export default class Hasilakhir extends Component {
  render() {
    return (
      <div className="animated fadeIn">
       <CCard>
            <CCardHeader>
              <h2 className="text-center">Hasil Akhir Topsis</h2>
              <br/>    
              {/* <CButton color="success">+Tambah</CButton> */}
              {/* <DocsLink name="CModal"/> */}
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={hasilAkhir}
              fields={fields}
              pagination
            />
            </CCardBody>
        </CCard>
        <CCard>
            <CCardHeader>
              <h2 className="text-center">Hasil Akhir Moora</h2>
              <br/>    
              {/* <CButton color="success">+Tambah</CButton> */}
              {/* <DocsLink name="CModal"/> */}
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={hasilAkhir}
              fields={fields}
              pagination
            />
            </CCardBody>
        </CCard>
      </div>
    );
  }
}
