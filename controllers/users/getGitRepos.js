const request = require("request");
const RequestError = require("../../helpers/RequestError");

const { GITHUB_CLIENT_ID: gitId, GITHUB_CLIENT_SECRET: gitSecret } =
  process.env;

const getGitRepos = async (req, res, next) => {
  const { username } = req.params;

  const options = {
    uri: `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${gitId}&client_secret=${gitSecret}`,
    methog: "GET",
    headers: { "user-agent": "node.js" },
  };

  request(options, function (error, response, body) {
    if (error) {
      next(RequestError(500, "Can't get git repos"));
    }
    if (response?.statusCode !== 200) {
      next(RequestError(404, "Git hub repositiries have not found"));
    } else {
      return res.json(JSON.parse(body));
    }
  });
};
module.exports = getGitRepos;
