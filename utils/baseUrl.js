const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.owley.ai"
    : "http://localhost:3000";

export default baseUrl;