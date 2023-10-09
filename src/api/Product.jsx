
export default getProductions = async ( res , req ) => {
  const res = await fetch("https://fakestoreapi.com/products");
  res.status(200).json({ message: "Hello from Next.js!" });
}
