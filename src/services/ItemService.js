import axios from "axios";

const ITEM_API_BASE_URL = "http://localhost:8080/api/v1";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
}
class ItemService {

    async getEmployees() {
        return await axios.get(ITEM_API_BASE_URL + "/items");
    }

    async createNewEmployee(data) {
        await axios.post(ITEM_API_BASE_URL + "/add-items", data, {headers: headers})
            .then(r => console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async updateEmployee(data, id) {
        await axios.put(ITEM_API_BASE_URL + `/update-item/${id}`, data, {headers:headers})
            .then(r=> console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async getEmployeeById(employeeId) {
        return await axios.get(ITEM_API_BASE_URL + "/get-item/" + employeeId)
    }

    async deleteEmployee(id) {
        await axios.delete(ITEM_API_BASE_URL + `/delete-item/${id}`, {headers:headers})
            .then(r=> console.log())
            .catch(e=> {
                console.log(e)
            });
    }



}

export default new ItemService()