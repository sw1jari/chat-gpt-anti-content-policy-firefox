const rules = [
  {
    urlPattern: "*://chat.openai.com/backend-api/moderations",
    domain: "chat.openai.com"
  },
  {
    urlPattern: "*://api.openai.com/v1/moderations",
    domain: "api.openai.com"
  }
];

function blockRequest(details) {
  return {cancel: true};
}

const filters = {
  urls: rules.map(rule => rule.urlPattern)
};

browser.webRequest.onBeforeRequest.addListener(
  blockRequest,
  filters,
  ["blocking"]
);
