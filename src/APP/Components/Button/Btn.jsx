import btn from "./../../Util/style/btns.style";

const Btn = ({ label = "Btn", type = "primary" }) => {
  console.log(btn[type] ? btn[type].container : btn.primary.container);

  return (
    <div className={btn[type] ? btn[type].container : btn.primary.container}>
      <p className={btn[type] ? btn[type].label : btn.primary.label}>{label}</p>
    </div>
  );
};

export default Btn;
