const User = require('../models/user');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'name email');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching users from the database' });
  }
};
exports.getOneUserById=async(req,res)=>{
  const userId = req.params.id;

  try {
    // Use the Mongoose model to find the user by _id
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
exports.createUser= async(req,res)=>{
  try{ 
    let newUser= new User({
      name: req.body.name,
      email: req.body.email,
  })
    await newUser.save();
    res.redirect('/api/users');
  }catch (err){
    if (err.name === 'ValidationError') {
      // Handle validation error
      res.status(400).json({ 
        status:'error',
        name:err.name,
        message: err.message,
        path:err.path
       });
    } else {
      // Handle other errors
      res.status(500).json({ 
        status:err,
        name:err,
        message: 'Internal server error',
        path:err.path });
    }
  }
 
}
exports.deleteUser=async(req,res)=>{
  const userId = req.params.id;

  try {
    // Use the Mongoose model to find and remove the user by _id
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      console.log("usuario no deleteado")
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully", user: deletedUser });

  } catch (err) {
    console.log("error de otro tipo")
    res.status(500).json({ message: err.message });
  }
}
exports.modifyUser=async(req,res)=>{
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    // Use the Mongoose model to find the user by _id and update
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ 
      message: err.message });
  }
}