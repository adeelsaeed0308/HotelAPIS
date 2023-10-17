class hotelValidate {
  static hotelRequiredParams = async (req, res) => {
    const { name, city, price, date, slug } = req.body;
    if (name && city && price && date && slug) {
      return true;
    } else {
      return {
        status: "failed",
        message: "All fields are required",
      };
    }
  };
}
module.exports = hotelValidate;
