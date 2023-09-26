export async function GetFetch(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_pages=${id}&_limit=10`
  );
  return response.json();
}
