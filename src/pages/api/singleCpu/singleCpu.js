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
    const cpusCollection = client.db('pc_builder').collection('cpus');
    
    console.log("database connected");

  //single products
      if (req.method === 'GET'){
      const cpuId = req.query.cpuId;
      const query = { _id:new ObjectId(cpuId)};
      const cpu = await cpusCollection.findOne(query);
      res.send({message: "success", status: 200, data: cpu})
    }

  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
