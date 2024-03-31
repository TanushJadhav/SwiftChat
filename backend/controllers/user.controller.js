import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUSerId = req.user._id;

    // $ne is used so the user logged in cannot see themselves
    // .select("-password") is used so that the password of the users are not shown
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUSerId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
