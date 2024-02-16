const User = require('../models/User');


async function asyncWrapper(callback) {
  try {
    return await callback();
  } catch (error) {
    if (error.name == 'MongoError') {
      if (error.code == 2) {
        throw new NotFoundError('User not found.');
      } else {
        throw new InternalServerError("Internal server error.");
      }
    } else {
      throw error;
    }
  }
}

exports.getUser = async (userId) => {
    return await User.findById(userId);

}


