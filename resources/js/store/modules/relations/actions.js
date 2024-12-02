export default {

    async getColumns({ commit }, table) {
        
        const data = await axios.get(`/admin/api/modules/getColumns?table=${table}`)
        return data.data

    },
}
