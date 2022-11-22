const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      console.log("ctrl wrapper");
      await controller(req, res, next);
    } catch (error) {
      console.log("ctrl wrapper catch", error);
      next(error);
    }
  };
};
module.exports = ctrlWrapper;
