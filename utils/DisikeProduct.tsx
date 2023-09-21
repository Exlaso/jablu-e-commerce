const DislikeProduct = async (
  product_id: string
): Promise<boolean | undefined> => {
  const res = await fetch("/api/DislikeProduct", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product_id: product_id }),
  });
  const data = await res.json();

  if (data.error) {
    throw new Error("Something Went Wrong");
  }
  return !data.error;
};

export default DislikeProduct;
