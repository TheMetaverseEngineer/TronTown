import TronWeb from "tronweb";
import excuteQuery from "../../lib/db";
import schema from "../../validation/signup";

const validate = async (data, res) => {
  try {
    const { wallet_address, email, username } = data;
    const tronWeb = new TronWeb({
      fullHost: "https://api.trongrid.io",
    });

    // check validation
    await schema.validate(data);

    // check username is unique
    await isUnique("username", username, res);

    // check email is unique
    await isUnique("email", email, res);

    // check wallet_address is unique
    await isUnique("wallet_address", wallet_address, res);

    // check wallet_address is valid
    if (!tronWeb.isAddress(wallet_address))
      res
        .status(400)
        .json({ success: false, message: "wallet_address is not valid" });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};

const isUnique = async (column, value, res) => {
  const unique = await excuteQuery({
    query: `SELECT * FROM users WHERE ${column} = ?`,
    values: [value],
  });

  if (unique?.length)
    res.status(400).json({
      success: false,
      message: `This ${column} has already been taken`,
    });
};

const handlePost = async (req, res) => {
  const { name, username, email, wallet_address } = req.body;

  // validation
  await validate(req.body, res);

  // insert data to users table
  const query =
    "INSERT INTO users (name, username, email, wallet_address) VALUES (?, ?, ?, ?)";
  const result = await excuteQuery({
    query,
    values: [name, username, email, wallet_address],
  });

  res.status(200).json({
    success: true,
    result: { id: result.insertId, name, username, email, wallet_address },
  });
};

const handleGet = async (req, res) => {
  const query = "SELECT * FROM users WHERE wallet_address = ?";
  const { wallet_address } = req.query;

  const result = await excuteQuery({ query, values: [wallet_address] });

  res.status(200).json({ success: true, result });
};

export default async function handler(req, res) {
  try {
    if (req.method === "POST") await handlePost(req, res);
    if (req.method === "GET") await handleGet(req, res);
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
  }
}
