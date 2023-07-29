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
    console.log("database connect")
  const productsCollection = client.db('pc_builder').collection('products');

  // products
  if(req.method === "GET"){
    const products = await productsCollection.find({}).toArray();
    res.send({message:"success", status:200, data: products})
  }
  

  } finally {
    // await client.close();
  }
}

export default run;
