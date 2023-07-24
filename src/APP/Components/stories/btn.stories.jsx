import BtnComponent from "./../Button/Btn";

const btn_names = ["primary", "secondary"];

export default {
  title: "COMPONENTS/BUTTONS",
  component: BtnComponent,
  argTypes: {
    type: {
      options: btn_names,
      control: { type: "radio" },
      default: "primary",
    },
    label: { control: { type: "text" } },
  },
};

export const Btn_Component = ({ label, type }) => {
  return <BtnComponent label={label} type={type} />;
};
