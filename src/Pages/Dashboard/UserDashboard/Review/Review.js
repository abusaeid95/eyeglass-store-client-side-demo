import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import "./Review.css";

const Review = () => {
  const { user } = useAuth();
  const [reviewDetails, setReviewDetails] = useState("");

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newreviewData = { ...reviewDetails };
    newreviewData[field] = value;
    setReviewDetails(newreviewData);
  };

  const handlereviewSubmit =() => {
    reviewDetails.user_email = user?.email;
    reviewDetails.user_name = user?.displayName;
    reviewDetails.user_photoUrl = user?.photoURL;
    console.log(reviewDetails);
    axios
      .post("http://localhost:5000/reviews", reviewDetails)
      .then(function (response) {
        // handle success
        if (response.data.insertedId) {
          alert("Review Added");
          console.log(reviewDetails);
        }
      })
      .catch(function (error) {
        // handle error
      });
  };

  return (
    <div>
      <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
      <h6 id="fh6">
        Your review will help us to improve our web hosting quality products,
        and customer services.
      </h6>

      <form id="feedback" action="">
        <div class="pinfo">Your personal info</div>

        <div class="form-ggroup">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-user"></i>
              </span>
              <input
                name="name"
                onChange={handleOnchange}
                readOnly
                defaultValue={user.displayName}
                placeholder="John Doe"
                class="fform-control"
                type="text"
              />
            </div>
          </div>
        </div>

        <div class="form-ggroup">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-envelope"></i>
              </span>
              <input
                name="email"
                onChange={handleOnchange}
                readOnly
                defaultValue={user.email}
                type="email"
                class="fform-control"
                placeholder="john.doe@yahoo.com"
              />
            </div>
          </div>
        </div>
        <div class="pinfo">Product Details.</div>
        <div class="form-ggroup">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fas fa-cart-arrow-down"></i>
              </span>
              <input
                name="productName"
                onChange={handleOnchange}
                placeholder="Your Purchased Product Name"
                class="fform-control"
                type="text"
              />
            </div>
          </div>
        </div>

        <div class="pinfo">Rate our overall services.</div>

        <div class="form-ggroup">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group d-flex">
              <span class="input-group-addon">
                <i class="fa fa-heart"></i>
              </span>
              <select
                onChange={handleOnchange}
                name="rating"
                class="fform-control"
                id="rate"
              >
                <option>Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div class="pinfo">Write your feedback.</div>

        <div class="form-ggroup">
          <div class="col-md-4 inputGroupContainer">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-pencil"></i>
              </span>
              <textarea
                onChange={handleOnchange}
                name="comment"
                class="fform-control"
                id="review"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type="submit"
          onClick={handlereviewSubmit}
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
