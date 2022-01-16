import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/v1";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
}
class ItemService {

    async getItems() {
        return await axios.get(ITEM_API_BASE_URL + "/items");
    }

    async addNewItem(data) {
        await axios.post(ITEM_API_BASE_URL + "/add-items", data, {headers: headers})
            .then(r => console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async updateItem(data, id) {
        await axios.put(ITEM_API_BASE_URL + `/update-item/${id}`, data, {headers:headers})
            .then(r=> console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async getItemById(employeeId) {
        return await axios.get(ITEM_API_BASE_URL + "/get-item/" + employeeId)
    }

    async deleteItem(id) {
        await axios.delete(ITEM_API_BASE_URL + `/delete-item/${id}`, {headers:headers})
            .then(r=> console.log())
            .catch(e=> {
                console.log(e)
            });
    }



}

export default new ItemService()