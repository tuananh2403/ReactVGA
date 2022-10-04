import React, { Component } from "react";
import "../smart.css";

export default class Smart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }
  nextExercise = (count) => {
    if (count < 5) {
      count = count + 1;
    } else {
      count = 5;
    };
    this.load_tr(count);
    this.setState({ index: count });
    

  };
  prevExercise = (count) => {
    if (count > 0) {
      count = count - 1;
    } else {
        count = 0;
    }
    this.setState({ index: count });
    this.load_tr(count);
  };
  load_tr = (index) => {
    console.log(index);
    let tr = document.getElementsByClassName("tr-exercise");
    let page = document.getElementById("numberPage");
    let btnPrev = document.querySelector("#btnPrev");
    let btnNext = document.querySelector("#btnNext");
    page.value = parseInt(index + 1 ) + "/6";
    for (var i = 1; i <= tr.length; i++) {
      if (i > index * 10 && i <= index * 10 + 10) {
        tr[i-1].style.display = "";
      } else {
        console.log(i)
        tr[i-1].style.display = "none";
      }
    }
    if (index == 0) {
      btnPrev.disabled = true;
      btnNext.disabled = false;
    } else if (index == 5) {
      btnPrev.disabled = false;
      btnNext.disabled = true;
    } else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  }
  render() {
    return (
      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
        />
        <section>
          <div className="container">
            <div className="overviews-title1">
              <div className="f-s-30 f-f-Gilroy-Bold pt-3 pb-1">
                Trắc nghiệm tính cách nghề nghiệp
              </div>
              <div
                className="blue-gradient"
                style={{ width: "20%", marginBottom: "40px" }}
              />
            </div>
            <div
              className="text-center f-s-30"
              style={{ marginBottom: "20px" }}
            >
              <p className="block-green f-f-Gilroy-Bold">
                Làm bài TRẮC NGHIỆM HƯỚNG NGHIỆP
              </p>
            </div>
            <div className="block-gray text-justify f-s-22 col-12">
              <p
                style={{ padding: "30px 20px 0", color: "#4a4a4a" }}
                className="f-f-Gilroy-Regular"
              >
                Các ý liệt kê trong mỗi bảng hướng đến các tố chất và năng lực
                cá nhân của bạn. Với mỗi ý sẽ có nhiều mức độ phù hợp với bạn,
                tương ứng với mỗi mức độ phù hợp, sẽ được quy định một điểm số
                tương ứng. Điểm số tương ứng này do bạn đánh giá và tự điền vào
                bảng theo thang đo sau.
              </p>
              <ol
                style={{ padding: "0 20px 30px 40px", color: "#4a4a4a" }}
                className="f-f-Gilroy-Bold f-s-22"
              >
                <li>Bạn thấy ý đó chưa bao giờ đúng với bạn – cho 0 điểm</li>
                <li>
                  Chỉ thấy ý đó chỉ đúng trong một vài trường hợp – cho 1 điểm
                </li>
                <li>Bạn thấy ý đó chỉ một nửa là đúng với bạn – cho 2 điểm</li>
                <li>
                  Bạn thấy ý đó gần như là đúng với bạn trong hầu hết mọi trường
                  hợp, chỉ có một vài trường hợp là chưa đúng lắm – cho 3 điểm
                </li>
                <li>
                  Bạn thấy ý đó là hoàn toàn đúng với bạn, không thể nào khác đi
                  được – cho 4 điểm
                </li>
              </ol>
            </div>
            <div className="f-s-16 f-f-Gilroy-Bold m-w-100 pt-2 pb-4">
              <table className="table-multiple-choice m-w-100">
                <thead className="c-white">
                  <tr className style={{ backgroundColor: "#0573ad" }}>
                    <td className="py-4">Điểm</td>
                    <td className="t-a-center">
                      <span className="table-point">1</span>
                    </td>
                    <td className="t-a-center">
                      <span className="table-point">2</span>
                    </td>
                    <td className="t-a-center">
                      <span className="table-point">3</span>
                    </td>
                    <td className="t-a-center">
                      <span className="table-point">4</span>
                    </td>
                    <td className="t-a-center">
                      <span className="table-point">5</span>
                    </td>
                  </tr>
                </thead>
                {/* List */}
                <tbody id="list">
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      1. Tôi có khả năng kiên trì
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores0"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores0"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores0"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores0"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores0"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">2. Tôi có tính tự lập</td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores1"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores1"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores1"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores1"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores1"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      3. Tôi luôn suy nghĩ thực tế, không viển vông, mơ hồ
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores2"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores2"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores2"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores2"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores2"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      4. Tôi thích được làm những công việc cần sự khéo léo của
                      tay chân
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores3"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores3"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores3"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores3"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores3"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      5. Tôi thích những công việc thấy ngay kết quả
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores4"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores4"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores4"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores4"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores4"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      6. Tôi là người thích nghi nhanh với môi trường mới
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores5"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores5"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores5"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores5"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores5"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      7. Tôi thích được vận hành, điều khiển các loại máy móc
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores6"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores6"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores6"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores6"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores6"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      8. Tôi thích làm việc ngoài trời hơn trong văn phòng, nhà
                      kín
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores7"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores7"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores7"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores7"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores7"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      9. Tôi làm tốt công việc đòi hỏi sự tỉ mỉ, cẩn thận
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores8"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores8"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores8"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores8"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores8"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise">
                    <td className="col-table-cont">
                      10. Tôi thích tiếp xúc với thiên nhiên, động vật, cây cỏ
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores9"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores9"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores9"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores9"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartR"
                        name="scores9"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      11. Tôi luôn có xu hướng tìm hiểu và khám phá những điều
                      mới mẻ
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores10"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores10"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores10"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores10"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores10"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      12. Tôi có khả năng suy luận và phân tích vấn đề
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores11"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores11"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores11"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores11"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores11"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      13. Tôi suy nghĩ mạch lạc, chặt chẽ
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores12"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores12"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores12"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores12"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores12"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      14. Tôi thích các công việc phân tích, thí nghiệm, nghiên
                      cứu
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores13"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores13"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores13"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores13"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores13"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      15. Tôi có khả năng tổng hợp, suy đoán vấn đề logic
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores14"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores14"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores14"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores14"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores14"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      16. Tôi thích những hoạt động điều tra, phân loại, đánh
                      giá
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores15"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores15"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores15"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores15"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores15"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      17. Tôi thường lập kế hoạch cho công việc mình phải làm
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores16"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores16"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores16"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores16"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores16"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      18. Tôi hứng thú với những công việc phức tạp, làm những
                      công việc thách thức
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores17"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores17"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores17"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores17"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores17"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      19. Tôi có khả năng giải quyết các vấn đề hóc búa
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores18"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores18"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores18"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores18"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores18"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      20. Tôi có tính quyết đoán, thất bại không nản
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores19"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores19"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores19"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores19"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartI"
                        name="scores19"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      21. Tôi là người dễ xúc động
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores20"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores20"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores20"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores20"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores20"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      22. Tôi luôn muốn độc đáo, khác biệt với số đông
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores21"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores21"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores21"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores21"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores21"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      23. Tôi thoải mái bộc lộ những sở thích
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores22"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores22"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores22"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores22"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores22"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      24. Tôi thích sự tự do, không theo những quy định, quy tắc
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores23"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores23"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores23"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores23"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores23"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      25. Tôi có khả năng thuyết trình, diễn xuất
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores24"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores24"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores24"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores24"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores24"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      26. Tôi có khả năng cảm thụ các loại hình nghệ thuật
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores25"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores25"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores25"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores25"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores25"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      27. Tôi có thể vẽ, điêu khắc, hoặc sáng tác truyện, thơ,
                      nhạc
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores26"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores26"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores26"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores26"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores26"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      28. Tôi có khả năng viết và trình bày được những ý tưởng
                      của mình
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores27"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores27"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores27"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores27"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores27"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      29. Tôi thích những công việc đòi hỏi sự sáng tạo
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores28"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores28"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores28"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores28"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onClick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores28"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      30. Tôi là người linh hoạt và nhạy cảm
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores29"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores29"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores29"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores29"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartA"
                        name="scores29"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      31. Tôi là người thân thiện, hay giúp đỡ mọi người
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores30"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores30"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores30"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores30"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores30"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      32. Tôi thích gặp gỡ, làm việc với mọi người
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores31"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores31"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores31"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores31"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores31"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      33. Tôi là người lịch sự, tử tế trong giao tiếp với mọi
                      người
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores32"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores32"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores32"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores32"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores32"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      34. Tôi thích được khuyên giải, tư vấn cho mọi người
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores33"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores33"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores33"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores33"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores33"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      35. Tôi là người biết lắng nghe người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores34"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores34"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores34"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores34"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores34"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      36. Tôi thích các hoạt động chăm sóc sức khoẻ cho bản thân
                      và người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores35"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores35"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores35"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores35"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores35"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      37. Trong giao tiếp tôi luôn vui vẻ, tế nhị và tôn trọng
                      người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores36"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores36"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores36"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores36"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores36"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      38. Tôi mong muốn mình có thể đóng góp nhiều xã hội tốt
                      đẹp hơn
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores37"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores37"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores37"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores37"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores37"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      39. Tôi có khả năng hòa giải, giải quyết những mâu thuẫn
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores38"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores38"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores38"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores38"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores38"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      40. Thích được an ủi, quan tâm tới người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores39"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores39"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores39"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores39"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartS"
                        name="scores39"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      41. Tôi là người có tính phưu lưu và mạo hiểm
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores40"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores40"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores40"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores40"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores40"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      42. Tôi có tính quyết đoán khi gặp tình huống khó khăn
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores41"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores41"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores41"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores41"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores41"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      43. Tôi là người mạnh mẽ trong hành động
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores42"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores42"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores42"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores42"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores42"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      44. Tôi có khả năng tranh luận và thuyết phục người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores43"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores43"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores43"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores43"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores43"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      45. Tôi thích các công việc quản lý và đánh giá
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores44"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores44"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores44"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores44"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores44"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      46. Tôi thường đặt ra các mục tiêu và lập kế hoạch đạt mục
                      tiêu
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores45"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores45"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores45"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores45"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores45"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      47. Tôi thích gây ảnh hưởng với người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores46"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores46"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores46"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores46"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores46"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      48. Tôi là người thích cạnh tranh và không muốn mình thua
                      kém người khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores47"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores47"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores47"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores47"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores47"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      49. Tôi có thể hiểu được suy nghĩ và hành động của người
                      khác
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores48"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores48"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores48"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores48"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores48"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      50. Tôi thường thúc đẩy mọi người cùng hướng đến mục tiêu
                      chung
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores49"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores49"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores49"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores49"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartE"
                        name="scores49"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      51. Tôi là người có đầu óc sắp xếp và tổ chức
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores50"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores50"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores50"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores50"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores50"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      52. Tôi là người cẩn thận trước mọi việc
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores51"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores51"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores51"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores51"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores51"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      53. Tôi được đánh giá là chu đáo, chính xác và tin cậy
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores52"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores52"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores52"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores52"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores52"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      54. Tôi thích các công việc tính toán sổ sách, ghi chép số
                      liệu
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores53"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores53"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores53"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores53"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores53"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      55. Tôi thích các công việc lưu trữ, phân loại, cập nhật
                      thông tin
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores54"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores54"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores54"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores54"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores54"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      56. Tôi thường đặt ra các mục tiêu, kế hoạch trong cuộc
                      sống
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores55"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores55"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores55"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores55"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores55"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      57. Tôi thích dự kiến các khoản thu chi
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores56"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores56"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores56"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores56"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores56"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      58. Tôi thích lập thời khóa biểu, sắp xếp lịch làm việc
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores57"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores57"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores57"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores57"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores57"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      59. Tôi thích làm việc với các con số, làm theo hướng dẫn,
                      quy trình.
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores58"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores58"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores58"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores58"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores58"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                  <tr className="tr-exercise" style={{ display: "none" }}>
                    <td className="col-table-cont">
                      60. Tôi thích làm những công việc với nhiệm vụ rõ ràng
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores59"
                        defaultValue={1}
                      />
                      <label htmlFor={1} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores59"
                        defaultValue={2}
                      />
                      <label htmlFor={2} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores59"
                        defaultValue={3}
                      />
                      <label htmlFor={3} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores59"
                        defaultValue={4}
                      />
                      <label htmlFor={4} />
                    </td>
                    <td className="t-a-center">
                      <input
                        type="radio"
                        onclick={() => this.checkRadio()}
                        className="sizeRadio PartC"
                        name="scores59"
                        defaultValue={5}
                      />
                      <label htmlFor={5} />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="input-group pt-2 pb-1">
                <button
                  className="btn btn-outline-secondary px-4"
                  id="btnPrev"
                    onClick={() => this.prevExercise(this.state.index)}
                  
                >
                  Lùi lại
                </button>
                <input
                  type="input"
                  disabled="true"
                  className="t-a-center form-control"
                  style={{ maxWidth: "100px", maxHeight: "40px" }}
                  id="numberPage"
                  name
                  defaultValue={'1/6'}
                />
                <button
                  className="btn btn-outline-secondary px-4"
                  id="btnNext"
                    onClick={() => this.nextExercise(this.state.index)}
                >
                  Kế tiếp
                </button>
              </div>
              <div className="t-a-center">
                <button
                  className="btn btn-success py-2 px-4 f-s-22"
                  id="finish"
                  onclick="BtnFinish()"
                  style={{ color: "white" }}
                  disabled
                >
                  Hoàn thành
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
