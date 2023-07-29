const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://pc-builder:PfhQgMY2M2Yn5Ov3@cluster0.zoj9s.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
  const motherboardsCollection = client.db('pc_builder').collection('motherboards');
    
    console.log("database connected");

  //single products
      if (req.method === 'GET'){
      const motherboardId = req.query.motherboardId;
      const query = { _id:new ObjectId(motherboardId)};
      const motherboard = await motherboardsCollection.findOne(query);
      res.send({message: "success", status: 200, data: motherboard})
    }

  

  } finally {
    // await client.close();
  }
}

export default run;
