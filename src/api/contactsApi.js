const axios = require('axios').default;
axios.defaults.baseURL = 'https://62d2a4b681cb1ecafa635d08.mockapi.io';

export const postContact = async (id, name, phone) => {
  const response = await axios.post(`/contacts`, {
    id: id,
    name: name,
    phone: phone,
  });
  return response;
};
