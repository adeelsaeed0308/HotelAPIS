const hotelValidate = require("../validations/hotelValidation");

const HotelService = require("../services/hotelService");

class HotelController {
  // @desc   Create Hotel
  //@route   post  /hotels
  static async createHotel(req, res, next) {
    try {
      const validation = await hotelValidate.hotelRequiredParams(req, res);

      if (validation == true) {
        const hotel = await HotelService.createHotel(req.body);
        res.status(201).json({
          status: "success",
          message: "Hotel created",
          data: hotel,
        });
      } else {
        res.status(400).json(validation);
      }
    } catch (error) {
      next(error);
    }
  }

  // @desc   get All hotels
  //@route   get  api/v1/hotels
  //@Access  public
  static async getAllHotels(req, res, next) {
    try {
      const { name, city, price, date, sort_field, sort_order } = req.query;
      const hotels = await HotelService.getAllHotels({
        name,
        city,
        price,
        date,
        sort_field,
        sort_order,
      });
      res.status(200).json({
        status: "success",
        hotels: hotels,
      });
    } catch (error) {
      next(error);
    }
  }
  // @desc   updateHotel
  //@route   put  api/v1/hotels/:id
  static async updateHotel(req, res, next) {
    try {
      const updatedHotel = await HotelService.updateHotel(
        req.params.id,
        req.body
      );
      if (!updatedHotel) {
        return res
          .status(200)
          .json({ status: "success", message: "No hotel found", response: [] });
      }
      res.status(200).json({
        status: "success",
        message: "Hotel updated",
        data: updatedHotel,
      });
    } catch (error) {
      next(error);
    }
  }
  // @desc   deleteHotel
  //@route   delete  api/v1/hotels/:id
  static async deleteHotel(req, res, next) {
    try {
      const result = await HotelService.deleteHotel(req.params.id);
      if (!result) {
        return res
          .status(200)
          .json({ status: "success", message: "No hotel found", response: [] });
      } else {
        res.status(200).json({
          status: "success",
          message: "Hotel deleted",
        });
      }
    } catch (error) {
      next(error);
    }
  }
  // @desc   get single Hotel
  //@route   get  /api/hotel/:id
  //@Access  public
  static async findHotelById(req, res, next) {
    try {
      const hotel = await HotelService.findHotelById(req.params.id);
      if (!hotel) {
        return res
          .status(200)
          .json({ status: "success", message: "No hotel found", response: [] });
      } else {
        res.status(200).json({
          status: "success",
          data: hotel,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HotelController;
