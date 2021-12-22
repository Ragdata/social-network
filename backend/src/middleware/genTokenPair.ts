import * as jwt from 'jsonwebtoken';

const SECRET_KEY1 = 'SECRET';

const genTokenPair = (id: string, login: boolean) => {
  const payload = {
    id,
    login,
  };
  return {
    accessToken: jwt.sign(payload, SECRET_KEY1, { expiresIn: '1h' }),
    refreshToken: jwt.sign(payload, SECRET_KEY1, { expiresIn: '30d' }),
  };
};

export default genTokenPair;