
const basicUrl  = "https://localhost:44320/api/Clothing" ;

export async function getAllClothing () {
    try {
     return await fetch (`${basicUrl}`)
     .then(res => res.json())
    }
    catch (err) {
    return err ;
    }
}