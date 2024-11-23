import { Product, WithPaginationResponseType } from "@/types/types";


  const serverSideGetProducts = async () => {
    const url=`${process.env.NEXT_BASE_API_URL}/product/all`
    

    try {
      const response= await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data= (await response.json()) as WithPaginationResponseType<Product[]>
      
      if (data?.success) {
          return {products:data.payload}
      }
      return {error:data?.errors};
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return {error:"Failed to load the post. Please try again later."};
    }
  };



export default async function Home() {
  const data = await serverSideGetProducts();
  if (data.error) {
    return <p>Error: {data?.error}</p>;
  }

  return (
    <div>
      <h1>Blog Posts (SSR with Axios)</h1>
      <ul>
        {data?.products?.products?.map((post:Product) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>By: {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}