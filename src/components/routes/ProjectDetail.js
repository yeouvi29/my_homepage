import classes from "./ProjectDetail.module.css";

const ProjectDetail = (props) => {
  return (
    <ul className={classes["detail-lists"]}>
      <li className={classes["detail-list"]}>name: {props.name}</li>
      <li className={classes["detail-list"]}>langues: {props.languages}</li>
      <li className={classes["detail-list"]}>infomation: {props.detail}</li>
    </ul>
  );
};

export default ProjectDetail;
