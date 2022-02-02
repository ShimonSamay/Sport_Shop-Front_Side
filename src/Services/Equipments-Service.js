
const basicUrl = "https://localhost:44320/api/Equipment"

export async function getAllEquip () {
    try {
       return await fetch (`${basicUrl}`)
      .then(res => res.json())
    }
     catch (err){
     return err ;
    }
}