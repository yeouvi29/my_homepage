import classes from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <ul className={classes["detail-lists"]}>
      <li className={classes["detail-list"]}>project title: {props.name}</li>
      <li className={classes["detail-list"]}>languages: {props.languages}</li>
      <li className={classes["detail-list"]}>infomation: {props.detail}</li>
    </ul>
  );
};

export default ProjectDetail;
