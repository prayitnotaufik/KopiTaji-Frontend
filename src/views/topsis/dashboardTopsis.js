import { CCard, CCardBody,CImg } from "@coreui/react";
import React, { Component } from "react";
import "../../../src/scss/style.scss"

export default class dashboardTopsis extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardBody>
            <h2 id="traffic" className="card-title mb-0 text-center">
              SISTEM PENDUKUNG KEPUTUSAN PENENTUAN KUALITAS BIJI KOPI <br/>
              dengan METODE Technique For Order Preference By Similarity To Ideal Solution(TOPSIS) studi Kasus Kopi Taji Lereng Bromo Malang
            </h2>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardBody>
          <CImg
            src={'avatars/foto-depan.jpg'}
            className="c-sidebar-brand-full gambar"
            alt="Logo"
            // name="logo-negative"
            // height={0}
          />
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
