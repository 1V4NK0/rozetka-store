const API = "http://localhost:2100";
const ORDERS_API = "http://localhost:1200";
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
  // console.log(data);
  return data;
}

// export async function createOrder(newOrder) {
//THE ONLY THING WAS CURLY BRACES AROUND DATA THERE SHOULD NOT BE CURLY BRACES
//   try {
//     const res = await fetch(`${ORDERS_API}/orders`, {
//       method: "POST",
//       body: JSON.stringify(newOrder),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (!res.ok) throw Error();
//     //from what I understand u don't really need to return anything and retrieve
//     const { data } = await res.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// }

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${ORDERS_API}/orders`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error("Failed to create order");
    const responseData = await res.json();
    console.log("API Response:", responseData);
    return responseData; // or const { data } = responseData;
  } catch (e) {
    console.log(e);
  }
}


export async function getOrder(id) {
  try {
    const res = await fetch(`${ORDERS_API}/orders/${id}`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
