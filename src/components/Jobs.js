import React, { Component } from 'react';
import '../Jobs.css'

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listJobs : this.props.listJobs,
    }
  }
  ContentJobs = () => {
    window.location.href = '/job';
}
    render() {
      const listJobs = this.state.listJobs.map((job) => {
        return (
          <div className="col-lg-3 col-sm-4 t-a-center py-3 hover-scale c-white t-de-none" onClick={() => this.ContentJobs()}>
          <div className="bg-card-blue py-3 px-3 hover-bg-to-grey">
            <img src={job.image} className="m-w-100 job-image" />
            <p className="f-f-Gilroy-Bold f-s-26 pt-3 job-title">
              {job.title}
            </p>
          </div>
        </div>
        )
      })
        return (
            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        <section>
          <div style={{backgroundColor: '#f4f4f4'}}>
            <div className="container py-4">
              <p className="f-f-Gilroy-Heavy col-12 f-s-40 t-a-center" style={{color: '#4a4a4a'}}>
                DANH SÁCH CÁC NHÓM NGÀNH ĐÀO TẠO
              </p>
              <div className="row" id="jobs-list">
                  {listJobs}
              </div>
            </div>
          </div>
        </section>
      </div>
        )
    }
}