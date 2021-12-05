import { AiFillFileText } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { AiFillExclamationCircle } from "react-icons/ai";
import FileManager from "./FileManager/FileManager";
import "./Assignments.css";
import { useHistory } from "react-router";

const Assignments = ({ title, openedDate, dueDate }) => {
  const history = useHistory();

  return (
    <div className="assignmentContainer">
      <div className="assignmentHeader">
        <h2 onClick={()=>history.push("course")}>&lt; Pengembangan Piranti Lunak</h2>
        <p>
          <strong>Opened: </strong>
          Friday, 3 December 2021, 12:00 AM
        </p>
        <p>
          <strong>Due: </strong>
          Tuesday, 9 December 2021, 5.30 PM
        </p>
        <button>Mark as done</button>
      </div>
      <div className="assignmentDescription">
        <p>Sesuai Dengan Soal UAS, Mohon dikumpulkan UASnya disini.</p>
        <div className="assignmentDescription__file">
          <div className="assignmentDescription__file--left">
            <div className="assignmentDescription__file--icon">
              <AiFillFileText />
            </div>
            <div className="assignmentDescription__file--text">
              <p>30 November 2021, 6:03 PM</p>
              <BiPlus />
            </div>
          </div>
          <div className="assignmentDescription__file--right">
            <p>30 November 2021, 6:03 PM</p>
          </div>
        </div>
      </div>
      <div className="assignmentSubmission">
        <div className="assignmentSubmission__left">
          <p>File submissions</p>
        </div>
        <div className="assignmentSubmission__right">
          <div className="assignmentSubmission__term">
            <input type="checkbox" />
            <p>
              This assignment is my own work, except where I have acknowledged
              using words, phrases, and ideas from other people
            </p>
            <AiFillExclamationCircle />
          </div>
          <FileManager />
        </div>
      </div>
    </div>
  );
};

export default Assignments;
