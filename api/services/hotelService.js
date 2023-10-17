const Hotel = require("../models/Hotel");
class HotelService {
  // @desc   Create Hotel
  //@route   post  api/v1/hotels
  static async createHotel({ name, city, price, date, slug }) {
    try {
      const hotel = await Hotel.create({ name, city, price, date, slug });
      return hotel;
    } catch (error) {
      throw new Error(`Failed to create hotel: ${error.message}`);
    }
  }

  // @desc   get All hotels
  //@route   get  api/v1/hotels
  //@Access  public
  static async getAllHotels({
    name,
    city,
    price,
    date,
    sort_field,
    sort_order,
  }) {
    try {
      let query = {};

      if (name) {
        query.name = { $regex: name, $options: "i" };
      }
      if (city) {
        query.city = city;
      }
      if (price) {
        const priceRange = price.split("-");
        if (priceRange.length === 2) {
          query.price = {
            $gte: parseFloat(priceRange[0]),
            $lte: parseFloat(priceRange[1]),
          };
        }
      }
      if (date) {
        const dateRange = date.split(":");
        if (dateRange.length === 2) {
          const startDate = new Date(dateRange[0]);
          const endDate = new Date(dateRange[1]);

          const StartDate = startDate.toISOString();
          const EndDate = endDate.toISOString();

          query.date = {
            $gte: StartDate,
            $lte: EndDate,
          };
        }
      }

      let hotelsQuery = Hotel.find(query);

      if (sort_field) {
        const sortOrder = sort_order === "desc" ? -1 : 1;

        hotelsQuery = hotelsQuery.sort({ [sort_field]: sortOrder });
      }

      const hotels = await hotelsQuery.exec();

      return hotels;
    } catch (error) {
      throw new Error(`Failed to fetch hotels: ${error.message}`);
    }
  }
  // @desc   updateHotel
  //@route   put  api/v1/hotels/:id
  static async updateHotel(id, { name, city, price, date, slug }) {
    const hotel = await Hotel.findByIdAndUpdate(
      id,
      { name, city, price, date, slug },
      { new: true }
    );

    return hotel;
  }
  catch(error) {
    throw new Error(`Failed to update hotel: ${error.message}`);
  }
  // @desc   deleteHotel
  //@route   delete  api/v1/hotels/:id
  static async deleteHotel(id) {
    try {
      const result = await Hotel.findByIdAndDelete(id);
      return result;
    } catch (error) {
      throw new Error(`Failed to delete hotel: ${error.message}`);
    }
  }
  // @desc   get single Hotel
  //@route   get  /api/hotel/:id
  //@Access  public
  static async findHotelById(id) {
    try {
      const hotel = await Hotel.findById(id);

      return hotel;
    } catch (error) {
      throw new Error(`Failed to find hotel: ${error.message}`);
    }
  }
}

module.exports = HotelService;
