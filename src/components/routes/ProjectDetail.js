import { memo } from "react";
import classes from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <ul className={classes["detail-lists"]}>
      <li className={classes["detail-list"]}>
        <strong>Project Title: </strong>
        {props.name[0] + props.name.slice(1, props.name.length).toLowerCase()}
      </li>
      <li className={classes["detail-list"]}>
        <strong>Languages:</strong> ${props.languages}
      </li>
      <li className={classes["detail-list"]}>
        <strong>Information:</strong> ${props.detail}
      </li>
    </ul>
  );
};

export default memo(ProjectDetail);
