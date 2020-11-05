import { sonicChannelSearch } from "../database/sonic.connection";

export default {
  async index(request, response) {
    const { query } = request.query;

    const results = await sonicChannelSearch.suggest(
      "posts",
      "default",
      query,
      {
        limit: 10,
      }
    );

    return response.status(200).json({ results });
  },
};
