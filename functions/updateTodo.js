const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const todos = await getCollection();
  const body = JSON.parse(event.body);

  try {
    const res = await todos.update(body.id, body);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
