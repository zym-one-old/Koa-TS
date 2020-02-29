export default {
  NODE_ENV: "development",
  port: 3000,
  useDB:true,
  ttl: 3600 * 4,
  dbsslconn: false,
  debugLogging: false,
  db: {
    HOST: "127.0.0.1",
    PORT: 5432,
    USER: "",
    PASS: "",
    DATABASE: ""
  }
};
