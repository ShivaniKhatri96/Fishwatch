export const colorStyles = {
  control: (styles) => ({
    ...styles,
    border: "solid #cdd0cb 1px",
    boxShadow: "none",
    fontSize: "1rem",
    padding: "0.2rem",
    "&:hover": { border: "solid #cdd0cb 1px" },
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      fontSize: "1rem",
      "&:hover": {
        backgroundColor: isSelected ? "#1D4948" : "#e4f8f8",
      },
      backgroundColor: isSelected ? "#1D4948" : "#ffffff",
    };
  },
  input: (styles) => ({ ...styles, color: "#000" }),
  singleValue: (styles) => ({ ...styles, color: "#000" }),
};
