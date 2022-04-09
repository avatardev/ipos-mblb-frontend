const Formatnumber = (number) => {
  return number?.toLocaleString("id-ID") || number;
};

export default Formatnumber;
