const base_url = process.env.DATABASE_URL;
const PORT = process.env.PORT;

const handleError = (err) => res => {
  return res.status(400).json({
    status_code: 400,
    status: false,
    message: err,
    data: [],
    error: err,
  });
}

module.exports = {
  base_url,
  PORT,
  handleError
};
