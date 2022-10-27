async function getData(): Promise<{ email: string; name: string }> {
  const res = await fetch("http://localhost:8080/mock");

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <div>{data.email}</div>
      <div>{data.name}</div>
    </div>
  );
}
