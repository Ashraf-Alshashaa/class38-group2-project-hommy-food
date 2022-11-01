import mongoose from "mongoose";

import validateAllowedFields from "../util/validateAllowedFields.js";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  fullName: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { street: String, city: String },
  isChef: { type: Boolean, required: true },
  photo: String,
  phone: Number,
  customerReviews: [
    {
      id: {
        type: mongoose.ObjectId,
        default: new mongoose.Types.ObjectId(),
      },
      customerId: String,
      comment: String,
      likes: [String],
      dislikes: [String],
    },
  ],
  customerRates: [{ customerId: String, rate: Number }],
  orderToPrepare: [
    {
      customerId: String,
      deliveryAddress: String,
      createdAt: Date,
      status: {
        type: String,
        enum: ["ready to pickup", "delivered", "completed"],
      },
      items: [
        {
          title: String,
          quantity: Number,
          customerName: String,
        },
      ],
    },
  ],
  orderHistory: [
    {
      chefId: mongoose.ObjectId, // Do we really need this. Check later.
      deliveryAddress: String,
      createdAt: Date,
      items: [
        {
          title: String,
          price: Number,
          quantity: Number,
          image: String,
          chefName: String,
        },
      ],
    },
  ],
  cart: [
    { mealId: { type: mongoose.ObjectId, ref: "Meal" }, quantity: Number },
  ],
  favoriteChefs: [String],
});

const User = mongoose.model("users", userSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["name", "email"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.name == null) {
    errorList.push("name is a required field");
  }

  if (userObject.email == null) {
    errorList.push("email is a required field");
  }

  return errorList;
};

export default User;
