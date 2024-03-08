const mongoose = require("mongoose");
const User = require("../model/user");
const Chicken = require("../model/Chicken");
const Goat = require("../model/Goat");
const Transaction =require('../model/transactions');

exports.signUp = async (req, res) => {
  const { firstName, lastName, contactNumber, email, password } = req.body;
  const user = await User.find({ email: Email });
  if (user.length)
    res
      .status(401)
      .json({ message: "Email is already in use try Different Email!" });

  let newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    contactNumber: contactNumber,
  });

  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
};

exports.signIn = async (req, res) => {
  const { contactNumber, password } = req.body;
  const user = await User.find({
    contactNumber: contactNumber,
    password: password,
  });

  if (user.length) {
    let userdata = user[0];
    res.status(201).json({ message: "User Logged In successful !", userdata });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};

exports.registerChicken = async (req, res) => {
  const { userID, flockSize, breed, purpose, flockNumber, notes } = req.body;
  let flock = new Chicken({
    userId: userID,
    flockSize: flockSize,
    breed: breed,
    purpose: purpose,
    flockNumber,
    notes,
  });

  await flock.save();

  res.json({ message: "flock registered successfully !" });
};

exports.getFlockbyID = async (req, res) => {
  const flockID = req.query.id;
  const flock = await Chicken.find({ _id: flockID });
  if (flock.length) {
    res.status(201).json({ flock });
  } else res.status(401).json({ message: "No such Flock exists !" });
};

exports.getFlockbyUser = async (req, res) => {
  const uId = req.query.userID;
  const flocks = await Chicken.find({ userId: uId });
  if (flocks.length) {
    res.status(201).json({ flocks });
  } else res.status(401).json({ message: "No such Flock exists !" });
};

exports.registerGoat = async (req, res) => {
  const { userID, breed, tagNo, gender, howGot, weight, notes } = req.body;
  let flock = new Goat({
    userId: userID,
    breed: breed,
    tagNo,
    gender,
    howGot,
    weight,
    notes,
  });

  await flock.save();

  res.json({ message: "flock registered successfully !" });
};

exports.getGoatbyID = async (req, res) => {
  const flockID = req.query.id;
  const flock = await Goat.find({ _id: flockID });
  if (flock.length) {
    res.status(201).json({ flock });
  } else res.status(401).json({ message: "No such Goat exists !" });
};

exports.getGoatbyUser = async (req, res) => {
  const uId = req.query.userID;
  const flocks = await Goat.find({ userId: uId });
  if (flocks.length) {
    res.status(201).json({ flocks });
  } else res.status(401).json({ message: "No such Goat exists !" });
};

exports.checkHealth = async (req, res) => {
  const images = req.file.fileName;
  res.status(201).json({message:'healthy'})
};

exports.storeMilkData = async (req, res) => {
  const { tagNo, amount } = req.body;
  const goat = await Goat.findOne({ tagNo: tagNo });
  if (goat) {
    let date = new Date();
    // console.log(date.toLocaleDateString());
    goat.Milk.push({ date: date.toLocaleDateString(), amount: amount });
    // console.log(goat.Milk);
    await goat.save();
    let milkdata = goat.Milk;
    res.status(201).json({ milkdata });
  } else res.status(401).json({ message: "No such Goat exists !" });
};

exports.getMilkData = async (req, res) => {
  const uId = req.query.id;
  const goat = await Goat.find({ userId: uId });
  if (goat.length) {
    let milkdata = [];
    for (let i = 0; i < goat.length; i++) {
      milkdata.push({
        tagNo: goat[i].tagNo,
        Milk: goat[i].Milk,
      });
    }
    res.status(201).json({ milkdata });
  } else res.status(401).json({ message: "No such Goat exists !" });
};

exports.storeEggData = async (req, res) => {
  const { flockNumber, amount } = req.body;
  const flock = await Chicken.findOne({ flockNumber: flockNumber });
  if (flock) {
    let date = new Date();
    flock.eggs.push({ date: date.toLocaleDateString(), amount: amount });
    await flock.save();
    let eggData = flock.eggs;
    res.status(201).json({ eggData });
  } else res.status(401).json({ message: "No such Goat exists !" });
};

exports.getEggData = async (req, res) => {
  const uId = req.query.id;
  const flock = await Chicken.find({ userId: uId });
  if (flock.length) {
    let eggData = [];
    for (let i = 0; i < flock.length; i++) {
      eggData.push({
        flockID: flock[i]._id,
        eggs: flock[i].eggs,
      });
    }
    res.status(201).json({ eggData });
  } else res.status(401).json({ message: "No such Goat exists !" });
};


exports.registerTransaction=async(req,res)=>{
  const {userId,amount,information,reason,type}=req.body;
  let temp=type.toLowerCase();
  const transac=new Transaction({
    userId,
    amount,
    information,
    reason,
    temp
  })
  await transac.save();
}

exports.getExpenses=async(req,res)=>{
  const {uID}=req.body;
  const expense=await Transaction.find({userId:uID,type:'expense'});
  if (expense.length) {
    res.status(201).json({expense});
  }
  res.status(401).json({message:'User does not exist'});
}

exports.getRevenue=async(req,res)=>{
  const {uID}=req.body;
  const revenue=await Transaction.find({userId:uID,type:'revenue'});
  if (revenue.length) {
    res.status(201).json({revenue});
  }
  res.status(401).json({message:'User does not exist'});
}