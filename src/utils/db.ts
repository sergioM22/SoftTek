import { DynamoDB } from 'aws-sdk';

const db = new DynamoDB.DocumentClient();
const tabla = 'Fusionados';

export const guardarFusion = async (data: any) => {
  console.log("4.0 DATA: ",data);
  await db.put({
    TableName: tabla,
    Item: data,
  }).promise();
};

export const obtenerHistorial = async () => {
  const res = await db.scan({ TableName: tabla }).promise();
  return res.Items;
};
