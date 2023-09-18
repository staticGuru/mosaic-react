import axios from "axios";

export const Auth = {
  async loginUser(payload) {
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/user/signin`,
      payload
    );
    return res;
  },
  async createUser(payload) {
    const res = await axios
      .post(`${import.meta.env.VITE_SERVER_URL}/api/user/signup`, payload)
      .then(({ data }) => data.rows?.[0]);
    return res;
  },
  async createOrganization(payload) {
    const res = await axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/api/org/createorganization`,
        payload
      )
      .then(({ data }) => data.rows?.[0]);
    return res;
  },
  async createclinic(payload, currentUser) {
    let updatedPayload = {
      ...payload,
      organizationId: currentUser.organization.id,
      currentUser,
    };
    const res = await axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/api/clinic/createclinic`,
        updatedPayload
      )
      .then(({ data }) => data.rows?.[0]);
    return res;
  },
  async getSoftwareList() {
    const res = await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/api/clinic/softwarelist`)
      .then(({ data }) => data.rows);
    return res;
  },
};
