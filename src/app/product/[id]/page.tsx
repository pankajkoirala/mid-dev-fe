import { ResponseType } from "@/types/axiosTypes";
import { Product } from "@/types/productTypes";
import { ProductDetailCard } from "./_components/PrductDetailsCard";
import { cn } from "@/utils/cn";
import Container from "@/container/container";
import ErrorCard from "@/components/ErrorCard";

const serverSideGetProductById = async (params: string) => {
  const url = `${process.env.NEXT_BASE_API_URL}/product/${params}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = (await response.json()) as ResponseType<Product>;

    if (data?.success) {
      return { product: data?.payload };
    }
    return { error: data?.errors };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return { error: "Failed to load the post. Please try again later." };
  }
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await serverSideGetProductById(id);

  if (data.error) {
    return  <Container >
 <ErrorCard errormessage={data?.error}/></Container>
  }

  return (
    <Container>
    <div className={cn(['w-full flex gap-3', 'md:gap-4', 'lg:gap-4'])}>
      <ProductDetailCard product={data?.product as Product} />
    </div>
   
    </Container>
  );
}
