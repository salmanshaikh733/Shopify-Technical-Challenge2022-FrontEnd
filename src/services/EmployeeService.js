import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
}
class EmployeeService {

    async getEmployees() {
        return await axios.get(EMPLOYEE_API_BASE_URL + "/employees");
    }

    async createNewEmployee(data) {
        await axios.post(EMPLOYEE_API_BASE_URL + "/add-employees", data, {headers: headers})
            .then(r => console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async updateEmployee(data, id) {
        await axios.put(EMPLOYEE_API_BASE_URL + `/update-employee/${id}`, data, {headers:headers})
            .then(r=> console.log())
            .catch(e => {
                console.log(e)
            });
    }

    async getEmployeeById(employeeId) {
        return await axios.get(EMPLOYEE_API_BASE_URL + "/get-employees/" + employeeId)
    }

    async deleteEmployee(id) {
        await axios.delete(EMPLOYEE_API_BASE_URL + `/delete-employee/${id}`, {headers:headers})
            .then(r=> console.log())
            .catch(e=> {
                console.log(e)
            });
    }



}

export default new EmployeeService()