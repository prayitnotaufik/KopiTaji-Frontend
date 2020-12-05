import { CCard, CCardBody, CCardHeader, CDataTable } from "@coreui/react";
import React, { Component } from "react";
import axios from "axios";

const fields = ["rank", "alternatif", "value"];

export default class Hasilakhir extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alternatif: [],
      rankTopsis: [],
      rankMoora: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.alternatif !== this.props.alternatif) {
      this.componentDidMount();
    }
  }

  getData = () => {
    axios.get(`http://localhost:1998/api/alternatif/`).then((res) => {
      let alt = res.data.result;
      this.setState({ alternatif: alt });
    });

    axios.get(`http://localhost:1998/api/topsis/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "ranked") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (this.state.alternatif[b] !== undefined) {
              objek.push({
                rank: i.rank,
                alternatif: this.state.alternatif[b].alternatif,
                value: i.value,
              });
            }
          });
          let sort = objek.sort((a, b) => {
            if (a.rank < b.rank) return -1;
            if (a.rank > b.rank) return 1;
            return 0;
          });
          this.setState({ rankTopsis: sort });
        }
      });
    });

    axios.get(`http://localhost:1998/api/moora/`).then((res) => {
      let data = res.data;
      let newdata = Object.keys(data).forEach((d) => {
        if (d === "ranked") {
          let objek = [];
          data[d].forEach((i, b) => {
            if (this.state.alternatif[b] !== undefined) {
              objek.push({
                rank: i.rank,
                alternatif: this.state.alternatif[b].alternatif,
                value: i.value,
              });
            }
          });
          let sort = objek.sort((a, b) => {
            if (a.rank < b.rank) return -1;
            if (a.rank > b.rank) return 1;
            return 0;
          });
          this.setState({ rankMoora: sort });
        }
      });
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <CCard>
          <CCardHeader>
            <h2 className="text-center">Hasil Akhir Topsis</h2>
            <br />
            {/* <CButton color="success">+Tambah</CButton> */}
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={this.state.rankTopsis}
              fields={fields}
              pagination
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <h2 className="text-center">Hasil Akhir Moora</h2>
            <br />
            {/* <CButton color="success">+Tambah</CButton> */}
            {/* <DocsLink name="CModal"/> */}
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={this.state.rankMoora}
              fields={fields}
              pagination
            />
          </CCardBody>
        </CCard>
      </div>
    );
  }
}
