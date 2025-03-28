import Accordion from "./components/Accordion/Accordion";
import Alert from "./components/Alert/Alert";
import ButtonWithDifferentStates from "./components/ButtonWithDifferentStates/ButtonWithDifferentStates";
import InteractiveTab from "./components/DropdownMenu/InteractiveTab/InteractiveTab";
import MultiLevelDropdownMenu from "./components/MultiLevelDropdownMenu/MultiLevelDropdownMenu";

const alertTypes = ["warning", "error", "success"] as const;
export type AlertTypeTypes = (typeof alertTypes)[number];

export type AlertType = {
  type: AlertTypeTypes;
  message: string;
};

type AlertsType = {
  success: AlertType;
  warning: AlertType;
  error: AlertType;
};

const alerts: AlertsType = {
  success: {
    type: "success",
    message: "Your profile was updated",
  },
  warning: {
    type: "warning",
    message: "Some updates didn't go through",
  },
  error: {
    type: "error",
    message: "Your profile was not updated",
  },
};

export default function App6() {
  return (
    <>
      <MultiLevelDropdownMenu />
      <InteractiveTab />
      <ButtonWithDifferentStates />
      <Alert alert={alerts.success} />
      <Alert alert={alerts.warning} />
      <Alert alert={alerts.error} />
      <Accordion />
    </>
  );
}
