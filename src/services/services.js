import request from 'superagent';

const URL = "https://pet-insurance-comparison.herokuapp.com/api/v1/companies";

export const createItem = async (data) => {
  try {
    const res = await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const {
      id,
      name,
      website,
      logo,
      quote,
      death,
      cured,
      fee,
      deductable,
      unique,
      reviews,
      cancellation,
      remax,
      rerate,
      dental,
      food,
    } = await res.json();

    return {
      id,
      name,
      website,
      logo,
      quote,
      death,
      cured,
      fee,
      deductable,
      unique,
      reviews,
      cancellation,
      remax,
      rerate,
      dental,
      food,
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchAllItems = async () => {
  try {
    const res = await fetch(`${URL}`);

    const companies = await res.json();
    return companies.map((item) => ({
      id: item.id,
      name: item.name,
      website: item.website,
      logo: item.logo,
      quote: item.quote,
      death: item.death,
      cured: item.cured,
      fee: item.fee,
      deductable: item.deductable,
      unique: item.unique,
      reviews: item.reviews,
      cancellation: item.cancellation,
      remax: item.remax,
      rerate: item.rerate,
      dental: item.dental,
      food: item.food,
    }));
  } catch (error) {
    console.error(error.message);
  }
};


export const fetchOneItem = async (companyId) => {
  try {
    const res = await fetch(
      `${URL}/${companyId}`
    );
    const {
      id,
      name,
      website,
      logo,
      quote,
      death,
      cured,
      fee,
      deductable,
      unique,
      reviews,
      cancellation,
      remax,
      rerate,
      dental,
      food,
    } = await res.json();

    return {
      id,
      name,
      website,
      logo,
      quote,
      death,
      cured,
      fee,
      deductable,
      unique,
      reviews,
      cancellation,
      remax,
      rerate,
      dental,
      food,
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const updateItem = async (companyId, updatedCompany) => {
  const res = await fetch(
    `${URL}/${companyId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCompany),
    }
  );
  return res.json();
};

export async function deleteItem(companyId) {
  const { body } = await request.delete(
    `${URL}/${companyId}`
  );

  return body;
}
