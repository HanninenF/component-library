import { AlertType } from "../../App6";
import "./Alert.scss";

type AlertProps = {
  alert: AlertType;
};

export default function Alert({ alert }: AlertProps) {
  return (
    <>
      <div className={`alert ${alert.type}`}>
        <span className="message"> {alert.message} </span>
      </div>
    </>
  );
}
