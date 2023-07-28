const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://pc-builder:PfhQgMY2M2Yn5Ov3@cluster0.zoj9s.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
    const powersCollection = client.db('pc_builder').collection('powers');
    
    console.log("database connected");

  //single products
      if (req.method === 'GET'){
      const powerId = req.query.powerId;
      const query = { _id:new ObjectId(powerId)};
      const power = await powersCollection.findOne(query);
      res.send({message: "success", status: 200, data: power})
    }

  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
