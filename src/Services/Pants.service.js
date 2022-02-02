
const basicUrl = "https://localhost:44320/api/Pants" ;

export async function getAllPants () {
    try {
    return await fetch(`${basicUrl}`)
    .then(res => res.json())
    }
    catch (err) {
        return err ;
    }
}