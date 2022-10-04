import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class NewStem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newscontent: this.props.dataNew,
    }
  }
    render() {
      const newsContent = this.state.newscontent.map((content) => {
        return (
          <Link className="col-lg-3 col-md-6 col-12 my-2 hover-scale" to={content.url} style={{textDecoration: 'none'}}>
                    <div className="row card-image pb-2 mx-auto" style={{height: '100%'}}>
                      <div className="col-12 px-0">
                        <img src={content.img} style={{width: '100%', height: 'auto'}} />
                        <p className="mt-2 mx-3 f-f-Gilroy-Bold f-s-14" style={{minHeight: '42px'}}>
                          {content.title}
                        </p>
                      </div>
                      <div className="col-12 align-self-end px-0">
                        <div className="mt-2 mx-3 c-blue f-f-Gilroy-Regular f-s-13">
                          {content.time}
                        </div>
                      </div>
                    </div>
          </Link>
        )
      })
        return (
            <div>
            <div className="container py-4 f-s-26 f-f-Gilroy-Bold">
              Tin tức
              <div className="blue-gradient" style={{width: '180px'}} />
            </div>
            <section>
              <div className="container">
                <div className="row" id="listNews">
                  {newsContent}
                </div>
              </div>
            </section>
          </div>
        )
    }
}