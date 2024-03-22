const calculateAvgRating = (reviews) => {
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating =
      totalRating === 0
        ? 0 // Return 0 when there are no ratings
        : parseFloat((totalRating / reviews?.length).toFixed(1)); // Round to one decimal place
    return {
      totalRating,
      avgRating,
    };
  };
  
  export default calculateAvgRating;
  