const axios = require("axios");

(async () => {
  const postToInsert = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  postToInsert.data.forEach(post => {
    let data = {
      user_id: 2,
      content: post.body,
      title: post.title,
    };

    console.log(data)
  });

})();
