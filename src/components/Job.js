import React,{ Component} from 'react';
import '../job.css';

export default class Job extends Component {
    render() {
        return (
            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        {/*  */}
        <input type="text" defaultValue="G00" className="d-none" id="idListJob" name />
        <section className="py-3">
          <div className="container py-4 f-s-34 f-f-Gilroy-Bold px-0">
            <a href="/jobs" style={{color: '#0775ad'}}><i className="fa-solid fa-arrow-right"><span>
                  Danh sách các nhóm ngành đào tạo
                </span>
              </i></a>
            <div className="blue-gradient" style={{minWidth: '180px'}} />
          </div>
          <div className="container">
            <div className="row">
              <p className="f-f-Gilroy-Bold col-12 f-s-35 t-a-center up" style={{color: '#4a4a4a'}} id="title">
                Nhóm ngành Khoa học giáo dục và đào tạo giáo viên
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row py-4 px-3" style={{backgroundColor: '#ebebeb', border: '1px solid #83bad6'}}>
              <div className="col-lg-12">
                <ul id="jobs-list">
                  <li className="f-f-Gilroy-Bold f-s-30">
                
                      <div className="c-blue-search t-de-none hover-c-grey hover">
                        Ngành Huấn luyện thể thao
                      </div>
                    
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Quản lý giáo dục
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục đặc biệt
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục Thể chất
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục chính trị
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục công dân
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục Tiểu học
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục Mầm non
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Giáo dục Quốc phòng - An ninh
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Khoa học tự nhiên
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Công nghệ
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Hàn Quốc
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Nhật
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Trung Quốc
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Pháp
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Anh
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Mỹ thuật
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Âm nhạc
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tiếng Nga
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Địa lý
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Lịch sử
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Ngữ Văn
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Kỹ thuật Nông nghiệp
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Kỹ thuật Công nghiệp
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Sinh học
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Hóa học
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Vật Lý
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Toán Học
                    </div>
                  </li>
                  <li className="f-f-Gilroy-Bold f-s-30">
                    <div className="c-blue-search t-de-none hover-c-grey hover">
                      Ngành Sư phạm Tin học
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
        )
    }
}