import JWTDecode from 'jwt-decode';

const verifyToken = (token) => {
  const decodedToken = JWTDecode(token);
  const newDate = Date.now();

  return decodedToken.exp * 1000 < newDate;
};

export default verifyToken;
