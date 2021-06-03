class HotelDetailsPage
{
        get headerHotelName(){return $('.hotel-redesign-detail-header-main h2 span')}
        get btnBookRoom(){return $$('button[data-qaid=\'Button_BookRoom\']')}
        get hoteldetailsstarrating(){return $('.hotel-details-star-rating-container')}

}
export default new HotelDetailsPage();