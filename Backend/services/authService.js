const jwt = require("jsonwebtoken");
const {
  createClientDTO,
  createBusinessDTO,
  createMezgebDTO,
} = require("../dtos/createDtos");
const Client = require("../models/Client");
const Business = require("../models/Business");
const Mezgebu = require("../models/Mezgebu");

const secretKey = "Ananya";

exports.createClient = async (data) => {
  try {
    if (!validateData(data, createClientDTO)) {
      throw new Error("Not valid client data");
    }

    const { name, email, phone, password } = data;
    if ((await checkEmail(email)) && (await checkPhone(phone))) {
      throw new Error("Email or Phone already exists");
    }
    const client = new Client({ name, phone, email, password });
    await client.save();
    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createBusiness = async (data) => {
  try {
    if (!validateData(data, createBusinessDTO)) {
      throw new Error("Not valid Business data");
    }
    const { ownerName, businessName, location, workHours, phone, email, password } = data;
    if ((await checkEmail(email)) && (await checkPhone(phone))) {
      throw new Error("Email already exists");
    }
    const business = new Business({
      ownerName,
      businessName,
      phone,
      email,
      password,
      location,
      workHours,
    });
    await business.save();
    return business;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.createMezgeb = async (data) => {
  try {
    if (!validateData(data, createMezgebDTO)) {
      throw new Error("Not valid mezgebu data");
    }

    const { name, email, phone, password } = data;
    if ((await checkEmail(email)) && (await checkPhone(phone))) {
      throw new Error("Email or Phone already exists");
    }
    const mezgeb = new Mezgebu({ name, email, phone, password });
    await mezgeb.save();
    return mezgeb;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.loginUser = async (data) => {
  const { email, phone, password } = data;

  if (phone) {
    try {
      let user = await Client.findOne({ phone });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Client" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Client",
        };
      }

      user = await Business.findOne({ phone });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Business" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Business",
        };
      }

      user = await Mezgebu.findOne({ phone });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Mezgebu" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Mezgebu",
        };
      }

      throw new Error("Invalid Credentials");
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    try {
      let user = await Client.findOne({ email });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Client" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Client",
        };
      }

      user = await Business.findOne({ email });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Business" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Business",
        };
      }

      user = await Mezgebu.findOne({ email });
      if (user && user.password === password) {
        const token = jwt.sign({ email: email, role: "Mezgebu" }, secretKey);
        return {
          user: { ...user.toJSON(), password: undefined },
          token,
          role: "Mezgebu",
        };
      }

      throw new Error("Invalid Credentials");
    } catch (error) {
      throw new Error(error.message);
    }
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

async function checkPhone(phone) {
  try {
    const clientExists = await Client.exists({ phone });
    const businessExists = await Business.exists({ phone });
    const mezgebExists = await Mezgebu.exists({ phone });
    return clientExists || businessExists || mezgebExists;
  } catch (error) {
    throw new Error(error.message);
  }
}

function validateData(data, dto) {
  return Object.keys(dto).every((key) => key in data);
}
