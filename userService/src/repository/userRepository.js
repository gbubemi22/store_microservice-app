import User from "../models/User.js";

const UserRpository = {
  createUser: async (
    first_name,
    last_name,
    email,
    password,
    phone_number,
    account_number,
    type
  ) => {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
      phone_number,
      account_number,
      type,
    });

    return user;
  },


  getUserById: async(id) => {
     const user = await User.findById({ _id: id})

     return user;
  },
  getUserByEmail: async(email) => {
     const user = await User.findOne({ email: email})

     return user;
  },
  
};


export default UserRpository;
