import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,e) => {
    const user = { email: data.email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("make admin successfully");
          reset()
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
