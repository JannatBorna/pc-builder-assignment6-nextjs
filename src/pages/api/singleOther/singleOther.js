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
    const othersCollection = client.db('pc_builder').collection('others');
    
    console.log("database connected");

  //single products
      if (req.method === 'GET'){
      const otherId = req.query.otherId;
      const query = { _id:new ObjectId(otherId)};
      const other = await othersCollection.findOne(query);
      res.send({message: "success", status: 200, data: other})
    }

  

  } finally {
    // await client.close();
  }
}

export default run;
