// import React, { useState } from "react";
// import MultiSelect from "react-multi-select-component";
// import { yupResolver } from "@hookform/resolvers";
// import { useHistory } from "react-router-dom";
// import { useData } from "../DataContext";
// import Gender from "../constants/genderSelectOptions";
// import { useForm, Controller } from "react-hook-form";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   //TODO error message not showing
//   veteranStatus: yup
//     .string()
// })


// export const Gender = () => {

//   // const { setValues, data } = useData();
//   // const history = useHistory();
//   const { register, handleSubmit, control, errors } = useForm({
//     defaultValues: {
//       gender: data.gender,
//     },
//     mode: "onBlur",
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) => {
//     history.push("./interests");
//     setValues(data);
//   };

//   // const [selected, setSelected] = useState([]);

//   return (
//     <div>
//       <h1>Select Fruits</h1>
//       <pre>{JSON.stringify(selected)}</pre>
//       <MultiSelect
//         gender={Gender}
//         value={selected}
//         onChange={setSelected}
//         labelledBy={"Select"}
//       />
//     </div>
//   );
// };

// export default Example;