const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { createClientDTO, createBusinessDTO, createMezgebDTO, loginUserDTO } = require('../dtos/createDtos');
const { Client } = require("../models/Client")
const { Business } = require("../models/Business")
const { Mezgebu } = require("../models/Mezgebu")

const secretKey = "Ananya";

exports.createClient = async (data) => {
    try {
        if(!validateData(data, createClientDTO)){
            throw new Error("Not valid client data")
        }

      const { name, email, password } = data;
      if (await checkEmail(email)) {
        throw new Error('Email already exists');
      }
      const client = new Client({ name, email, password });
      await client.save();
      return client;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
exports.createBusiness = async (data) => {
    try {
        if(!validateData(data, createBusinessDTO)){
            throw new Error("Not valid Business data")
        }
      const { ownerName, businessName, email, password } = data;
      if (await checkEmail(email)) {
        throw new Error('Email already exists');
      }
      const business = new Business({ ownerName, businessName, email, password });
      await business.save();
      return business;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
exports.createMezgeb = async (data) => {
    try {
        if(!validateData(data, createMezgebDTO)){
            throw new Error("Not valid mezgebu data")
        }
      const { name, email, password } = data;
      if (await checkEmail(email)) {
        throw new Error('Email already exists');
      }
      const mezgeb = new Mezgebu({ name, email, password });
      await mezgeb.save();
      return mezgeb;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  

  exports.loginUser = async (data) => {
    const { email, password } = data;
  
    let user;
    let token;
  
    try {
      user = await Client.findOne({ email });
      if (user && user.password === password) {
        token = jwt.sign({ email: email, role: 'Client' }, secretKey);
        return { user, token };
      }
  
      user = await Business.findOne({ email });
      if (user && user.password === password) {
        token = jwt.sign({ email: email, role: 'Business' }, secretKey);
        return { user, token };
      }
  
      user = await Mezgebu.findOne({ email });
      if (user && user.password === password) {
        token = jwt.sign({ email: email, role: 'Mezgebu' }, secretKey);
        return { user, token };
      }
  
      if (!user || user.password !== password) {
        throw new Error('Invalid Credentials');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  


async function checkEmail(email) {
    try {
      const clientExists = await Client.exists({ email });
      const businessExists = await Business.exists({ email });
      const mezgebExists = await Mezgebu.exists({ email });
      return clientExists || businessExists || mezgebExists;
    } catch (error) {
      throw new Error(error.message);
    }
  }

function validateData(data, dto) {
    return Object.keys(dto).every(key => key in data);
  }