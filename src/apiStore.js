const API = "http://localhost:2100";
//if does not work get rid of 'products'

// getList
//getOrder
//createOrder
//*updateOrder

export async function getItems() {
  const res = await fetch(`${API}/products`);

  if (!res.ok) {
    throw Error("error loading items list");
  }
  const data = await res.json();

  return data;
}

export async function getItem(id) {
  const res = await fetch(`${API}/products/${id}`);

  if (!res.ok) {
    throw Error("error loading item");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
