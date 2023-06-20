const BEE_DEBUG_ENDPOINT = process.env.BEE_DEBUG_ENDPOINT;
const BEE_ENDPOINT = process.env.BEE_ENDPOINT;
const CHAIN_ID = process.env.CHAIN_ID;
const GOOGLE_STORAGE_BUCKET_NAME = process.env.GOOGLE_STORAGE_BUCKET_NAME;
const GOOGLE_STORAGE_PROJECT_ID = process.env.GOOGLE_STORAGE_PROJECT_ID;
const GOOGLE_SERVICE_KEY = process.env.GOOGLE_SERVICE_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

if (!BEE_DEBUG_ENDPOINT) {
  throw new Error("BEE_DEBUG_ENDPOINT is not set");
}

if (!BEE_ENDPOINT) {
  throw new Error("BEE_ENDPOINT is not set");
}

if (!CHAIN_ID) {
  throw new Error("CHAIN_ID is not set");
}

if (!GOOGLE_STORAGE_BUCKET_NAME) {
  throw new Error("GOOGLE_STORAGE_BUCKET_NAME is not set");
}

if (!SECRET_KEY) {
  throw new Error("SECRET_KEY is not set");
}

const BUCKET_NAME = GOOGLE_STORAGE_BUCKET_NAME;
const BEE_DEBUG = BEE_DEBUG_ENDPOINT;
const BEE = BEE_ENDPOINT;
const NETWORK = CHAIN_ID;
const SECRET = SECRET_KEY;
const SERVICE_KEY = GOOGLE_SERVICE_KEY;
const STORAGE_PROJECT_ID = GOOGLE_STORAGE_PROJECT_ID;

export {
  BUCKET_NAME,
  BEE_DEBUG as BEE_DEBUG_ENDPOINT,
  BEE as BEE_ENDPOINT,
  NETWORK as CHAIN_ID,
  SECRET,
  SERVICE_KEY as GOOGLE_SERVICE_KEY,
  STORAGE_PROJECT_ID,
};
