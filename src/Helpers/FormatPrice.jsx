const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-IN", {       //format the price using intl.format constructor
        style:"currency",
        currency:"INR",
    maximumFractionDigits:2,
    }).format(price / 100);
  
}

export default FormatPrice
