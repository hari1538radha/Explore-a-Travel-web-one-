import { uploadModel } from "../Schema/UploadSchema.js";

export const home = (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  uploadModel
    .find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        return res.send({
          status: 200,
          message: "places found",
          data: data,
        });
      }
    })
    .limit(limit * 1)
    .skip((page - 1) * limit);
};
