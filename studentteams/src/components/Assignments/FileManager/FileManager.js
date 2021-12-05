import { AiOutlineFile, AiOutlineFolder, AiFillFolder } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import "./FileManager.css";

const FileManager = () => {
  return (
    <div className="fileManager">
      <p>Maximum file size 20MB, maximum number of files: 20</p>
      <div className="fileManager__box">
        <div className="fileManager__header">
          <div className="fileManager__header--icon">
            <div>
              <AiOutlineFile />
            </div>
            <div>
              <AiOutlineFolder />
            </div>
            <div>
              <FaDownload />
            </div>
          </div>
          <div className="fileManager__header--icon">
            <div>
              <BsFillGrid3X3GapFill />
            </div>
            <div>
              <BsListUl />
            </div>
            <div>
              <AiFillFolder />
            </div>
          </div>
        </div>
        <div className="fileManager__body">
          <div>
            <AiFillFolder />
            <p>Files</p>
          </div>
        </div>
      </div>
      <div className="fileManager__button">
        <button>Save Changes</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default FileManager;
