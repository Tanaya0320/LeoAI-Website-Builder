import mongoose from "mongoose";

const WebsiteSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
    },

    industry: {
      type: String,
    },

    template: {
      type: String,
    },

    generatedData: {
      type: Object,
    },
  },

  {
    timestamps: true,
  }
);

const Website =
  mongoose.models.Website ||
  mongoose.model(
    "Website",
    WebsiteSchema
  );

export default Website;