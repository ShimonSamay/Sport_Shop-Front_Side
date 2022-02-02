
const basicUrl = "https://localhost:44320/api/Shirts" ;

export async function getAllShirts () {
    try {
     return await fetch (`${basicUrl}`)
     .then(res => res.json())
    }
    catch (err) {
      return err ;
    }
}