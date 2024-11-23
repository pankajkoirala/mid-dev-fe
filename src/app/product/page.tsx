import CardSkeleton from "@/components/Card/cardSkeleton";
import Container from "@/container/container";
import { WithPaginationResponseType } from "@/types/axiosTypes";
import { Product } from "@/types/productTypes";
import { cn } from "@/utils/cn";

const serverSideGetProducts = async () => {
  const url = `${process.env.NEXT_BASE_API_URL}/product`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = (await response.json()) as WithPaginationResponseType<
      Product[]
    >;

    if (data?.success) {
      return { products: data.payload };
    }
    return { error: data?.errors };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return { error: "Failed to load the post. Please try again later." };
  }
};

export default async function Home() {
  const data = await serverSideGetProducts();
  if (data.error) {
    return <p className="">Error: {data?.error}</p>;
  }

  if (!data?.products&&!data.error) {
    return (
      <Container >
      <div
        className={cn([
          [
            "grid w-full",
            "gap-2 grid-cols-1",
            "sm:gap-2 sm:grid-cols-2",
            "md:grid md:gap-x-2 gap-y-2 md:grid-cols-3",
            "lg:grid lg:gap-x-2 gap-y-2 lg:grid-cols-4",
          ],
        ])}
      >
        {[1, 2, 3,4,5,6,7,8]?.map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
        </Container>
    );
  }

  return (
    <Container>
   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ad perferendis ipsam nam dicta ex dignissimos, enim dolor accusamus architecto aperiam voluptatem temporibus libero fugiat ut eum eius sunt sequi.
    </Container>
  );
}
