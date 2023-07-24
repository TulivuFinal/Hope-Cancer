const baseDiv = "cursor-pointer flex justify-center items-center  rounded-md";
const baseLabel = "text-white text-xl";

const btn = {
  primary: {
    container: `${baseDiv} bg-primary`,
    label: baseLabel,
  },
  secondary: {
    container: `${baseDiv} bg-green-500`,
    label: baseLabel,
  },
};

export default btn;
