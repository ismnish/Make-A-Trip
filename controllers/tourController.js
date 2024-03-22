import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Succesfully created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create new Tour",
    });
  }
};

//update tour

export const updatedTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

//delete tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to deleted",
    });
  }
};
//getSingle tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Getting tour",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};
//getAllTour tour

export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 6)
      .limit(6);
    res.status(200).json({
      success: true,
      count: tours.length,
      message: "All available tours",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "there are no any tour!",
    });
  }
};

//get tour by serach
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); // here 'i' means case sensitive
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  
  // console.log("City:", city);
  // console.log("Distance:", distance);
  // console.log("Max Group Size:", maxGroupSize);
  try {
    const tours = await Tour.find({
      city:city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");
    //gte means greater than equal
    res.status(200).json({
      success: true,
      message: "successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    // Assuming 'featured' is a boolean field
    // const featured = req.params.featured
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(6);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to fatch",
    });
  }
};
