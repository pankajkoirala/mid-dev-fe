import { ResponseType } from "@/types/axiosTypes";
import { Product } from "@/types/productTypes";
import { cn } from "@/utils/cn";
import Container from "@/container/container";

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

export default async function ProductById({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await serverSideGetProductById(id);

  if (data.error) {
    return <p>Error: {data?.error}</p>;
  }

  return (
    <Container>
    <div className={cn(['w-full flex gap-3', 'md:gap-4', 'lg:gap-4'])}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nihil veniam beatae impedit asperiores odio, quisquam porro sapiente dignissimos culpa laborum perspiciatis neque praesentium quaerat perferendis doloribus doloremque ducimus expedita.    </div>
   
    </Container>
  );
}
