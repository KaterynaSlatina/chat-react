import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.jpg" alt="" />
        <h2>User Name</h2>
        <p>User description</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrow-right.png" alt="" width={20} height={20} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy and help</span>
            <img src="./arrow-right.png" alt="" width={20} height={20} />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrow-down.png" alt="" width={20} height={20} />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img src="../download.png" alt="" className="download" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img src="../download.png" alt="" className="download" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img src="../download.png" alt="" className="download" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img src="../download.png" alt="" className="download" />
            </div>
          </div>
          <div className="photos"></div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrow-right.png" alt="" width={20} height={20} />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
