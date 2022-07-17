import { DataTypes, Sequelize } from "sequelize";
import { server } from "../../../config/server";
import { MODEL } from "../../enums/models";

const sequelize = <Sequelize>(<unknown>server.dataBaseConnection);

const BlogsModel = sequelize.define(
  MODEL.BLOG,
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    body: {
      type: DataTypes.TEXT,
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

export { BlogsModel };
