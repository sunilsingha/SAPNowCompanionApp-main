import { Button } from "../Button";
import classes from "./BackToMapButton.module.css";
import { useNavigate, useParams } from "react-router-dom";


export const BackToMapButton = () => {
  const navigate = useNavigate();
  const { userid } = useParams<{ userid: string }>();
  const onClick = () => {
    navigate(`/map/${userid}`);
  };

  return (

      <div className={classes.footer}>
        <Button
          design="white"
          iconSrc="slim-arrow-left"
          iconPosition="left"
          onClick={onClick}
        >
          Back to Map
        </Button>
      </div>
  );
};