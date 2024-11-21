import { Product, ResponseType } from "@/shared/types/types";


  const serverSideGetProductById = async (params:string) => {
    const url=`${process.env.NEXT_BASE_API_URL}/product/${params}`
    

    try {
      const response= await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const data= (await response.json()) as ResponseType<Product>
      
      if (data?.success) {
          return {product:data?.payload}
      }
      return {error:data?.errors};
      
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      return {error:"Failed to load the post. Please try again later."};
    }
  };




export default async function ProductById({ params }: { params: Promise<{ id: string }> }) {
    const { id } =  await params

  const data = await serverSideGetProductById(id);
  
  if (data.error) {
    return <p>Error: {data?.error}</p>;
  }

  return (
    <div>
      <h1>Blog Posts (SSR with Axios)</h1>
      <ul>
          <li key={data?.product?.id}>
            <h2>{data?.product?.title}</h2>
            <p>By: {data?.product?.author}</p>
          </li>
      </ul>
    </div>
  );
}