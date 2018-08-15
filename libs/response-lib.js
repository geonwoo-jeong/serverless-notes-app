export function success(body) {
  return buildResponse(200, body);
}

export function failure(body) {
  return buildReponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}