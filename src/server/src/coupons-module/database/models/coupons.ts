import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const CouponsModel = sequelize.define(
  MODEL.COUPON,
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    miniDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    secondDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    coupon: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,

    timestamps: false,

    indexes: [
      {
        fields: ["id"],
      },
    ],
  }
);

export { CouponsModel };
