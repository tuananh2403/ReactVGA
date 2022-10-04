import React, { Component } from "react";
import '../documentstem.css';

export default class DocumentStem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStems: this.props.dataDocumentStem,
    }
  }
  render() {
    const dataStems = this.state.dataStems.map((dataStem) => {
      return (
        <a
                className="col-lg-3 col-md-3 py-4 col-sm-12 hover-scale hover-orange t-de-none"
                href="content2"
              >
                <img
                  src={dataStem.image}
                  className="m-w-100"
                />
        </a>
      )
    })
    return (
      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
        />
        <section className="py-3">
          <div className="container py-4 f-s-26 f-f-Gilroy-Bold px-0">
            Tài liệu giáo dục STEM
            <div className="blue-gradient" style={{ minWidth: "180px" }} />
          </div>
          <div className="container px-0">
            <div className="row" id="ebook">
                {dataStems}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
