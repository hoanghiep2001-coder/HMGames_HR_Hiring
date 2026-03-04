import "./App.css";
import BestPA from "./data";
import logo from "./image/HM_Logo.png";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <div className="inner">
          <div className="logo">
            <img className="logo_img" src={logo} alt="" />
          </div>
          <h3 className="title">Cocos Playable Ads Test</h3>
          <ul className="list">
            {BestPA.map((month, index) => {
              return (
                <li className="item" key={index}>
                  <div>
                    <p className="content">{month.timeline}</p>

                    <ul className="sub-list">
                      {/* Lưu ý: Đổi BestPA[0].data thành month.data để đúng logic vòng lặp */}
                      {month.data.map((PA_info, subIndex) => {
                        return (
                          <li key={subIndex} className="sub-item">
                            {/* Chỉ hiển thị nếu có nội dung dev */}
                            {PA_info.dev && <p className="sub-item-dev">{PA_info.dev}:</p>}

                            <a href={PA_info.path} className="link" target="_blank" rel="noreferrer">
                              {" " + PA_info.name}
                            </a>

                            {/* Phần details giờ sẽ tự động nhảy xuống dưới nhờ flex-direction: column */}
                            <div className="details-container">
                              <ul className="details-list">
                                {PA_info.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="detail-text">
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;