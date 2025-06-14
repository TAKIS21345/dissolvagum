export async function submitToIndexNow(urls: string[]) {
  const body = {
    host: "dissolvagum.com",
    key: "a83c826a8475401ebcf84e29b69c5840",
    keyLocation: "https://dissolvagum.com/a83c826a8475401ebcf84e29b69c5840.txt",
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return res.ok;
}
