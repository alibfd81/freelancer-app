import http from "./httpService";

export function getProposalsApi() {
    return http.get(`/proposal/list`).then(({ data }) => data.data);
}
export function createProposalsApi(data) {
    return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}