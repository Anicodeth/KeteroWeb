const createClientDTO = {
    name: String,
    email: String,
    phone:String,
    password: String
  };
  
  // DTOs for createBusiness
  const createBusinessDTO = {
    email: String,
    ownerName: String,
    businessName: String,
    password: String
  };
  
  // DTOs for createMezgeb
  const createMezgebDTO = {
    name: String,
    email: String,
    password: String
  };
  
  // DTOs for loginUser
  const loginUserDTO = {
    email: String,
    password: String
  };
  
  module.exports = { createClientDTO, createBusinessDTO, createMezgebDTO, loginUserDTO };