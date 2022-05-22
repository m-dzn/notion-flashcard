export function addHttp(url: string) {
  let urlWithHttp = url;

  if (!/^http[s]?\:\/\//.test(url)) {
    urlWithHttp = "http://" + url;
  }

  return urlWithHttp;
}
