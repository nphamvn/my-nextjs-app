interface ProductProps {
  id: string;
  name: string;
  price: number;
}

export const revalidate = 10; // ISR: tái tạo sau 10s

export default async function ProductPage({ params }: { params: { id: string } }) {
  const now = new Date().toISOString();
  const { id } = params;
  const product: ProductProps = { id, name: `Product ${id}`, price: 100 + Number(id) * 10 };

  return (
    <div>
      <h2>Product Page (ISR)</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Generated at: {now}</p>
    </div>
  );
}
