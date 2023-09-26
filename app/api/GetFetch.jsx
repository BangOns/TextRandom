export async function GetFetch(id) {
  const response = await fetch(`http://localhost:3000/api/user?_pages=${id}`);
  return response.json();
}
