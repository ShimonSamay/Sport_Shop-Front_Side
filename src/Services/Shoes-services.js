const basicUrl = "https://localhost:44320/api";

export async function getAllShoes() {
  try {
      return await fetch(`${basicUrl}/Shoes`)
      .then((res) => res.json())
      .catch((rej) => console.log(rej));
   } 
   catch (err) {
    return err ;
  }
}
