import React, { useState } from "react";
// import Confetti from "react-confetti";
// import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import { MainContainer } from "../components/MainContainer";
// import { PrimaryButton } from "../components/PrimaryButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
});

export const ThankYou = () => {
  // const [success, setSuccess] = useState(false);
  const styles = useStyles();

  // const onSubmit = async () => {
  //   const formData = new FormData();
  //   if (data.files) {
  //     data.files.forEach((file) => {
  //       formData.append("files", file, file.name);
  //     });
  //   }

  // const res = await fetch("http://localhost:4000/", {
  //   method: "POST",
  //   body: formData,
  // });

  //   if (res.status === 200) {
  //     Swal.fire("Great job!", "You've passed the challenge!", "success");
  //     setSuccess(true);
  //   }
  // };

  // if (success) {
  //   return <Confetti />;
  // }

  return (
    <>
      <MainContainer>
        <Typography component="h2" variant="h5">
          Thanks for signing up!
        </Typography><br />
        <Typography component="h6" variant="h6">
          Please check your email for further instructions
        </Typography>
      </MainContainer>
    </>
  );
};