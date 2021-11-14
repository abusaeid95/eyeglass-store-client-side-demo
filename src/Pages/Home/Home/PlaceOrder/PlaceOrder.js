import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import useAuth from "../../../../Hooks/useAuth";
import { useHistory, useLocation, useParams } from "react-router";
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
  const [orders, setOrders] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";

  useEffect(() => {
    fetch(`https://glacial-chamber-66798.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.productName = orders?.name;
    data.productPrice = orders?.price;
    data.productImg = orders?.img;
    data.status = "pending";
    data.user_email = user?.email;
    fetch("https://glacial-chamber-66798.herokuapp.com/allorders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Added Succesfully");
          reset();
          history.push(redirect_url);
        }
      });
  };

  return (
    <div className="text-center py-5 addinput ">
      <form className="booking-contain" onSubmit={handleSubmit(onSubmit)}>
        <input
          readOnly
          defaultValue={orders?.name}
          className="my-2"
          {...register("name")}
        />
        <br />
        <input
          readOnly
          defaultValue={orders.price}
          type="number"
          placeholder="price"
          {...register("price")}
        />
        <br />
        <input
          readOnly
          defaultValue={new Date().toLocaleDateString()}
          {...register("date")}
        />
        <br />
        <input
          readOnly
          defaultValue={user?.email}
          {...register("user_email")}
        />
        <br />
        <input
          readOnly
          defaultValue={user?.displayName}
          {...register("user_name")}
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input {...register("user_age")} type="number" placeholder="Age" />
        <br />
        <input
          {...register("user_prescription")}
          type="text"
          placeholder="Prescription image link"
        />
        <br />
        <input
          {...register("user_Phone")}
          type="number"
          defaultValue={orders?.user_Phone}
          placeholder="Phone number"
        />
        <br />
        <input
          {...register("user_address")}
          type="text"
          defaultValue={orders?.user_address}
          placeholder="Your Address"
        />
        <br />
        <input className="my-2 infobtn" type="submit" />
      </form>
    </div>
  );
};

export default PlaceOrder;
