import { useSelector } from "react-redux";
import { selectOperationStatus } from "../../../homepageSlice";
import Error from "../Error";
import Pending from "../Pending";
import Tiles from "../Tiles";

const Projects = () => {
  const operationStatus = useSelector(selectOperationStatus);

  return {
    pending: <Pending />,
    success: <Tiles />,
    error: <Error />,
  }[operationStatus];
};

export default Projects;
