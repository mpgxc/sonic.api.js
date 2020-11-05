import { sonicChannelSearch } from "../database/sonic.connection";

export default {
  async index(request, response) {
    const { query } = request.query;
    const results = await sonicChannelSearch.query("posts", "default", query, {
      lang: "por",
    });

    return response.status(200).json({ results });
  },
};
