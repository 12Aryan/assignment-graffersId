export const calculateAverageRating = (reviews: any) => {
  if (reviews?.length === 0) return 0;

  let totalRating = 0;
  let reviewCount = 0;
  if (reviews && reviews?.length > 0) {
    reviews.forEach((review: any) => {
      totalRating += review.rating;
      reviewCount++;
    });
  }
  return totalRating / reviewCount || 0 ;
};
