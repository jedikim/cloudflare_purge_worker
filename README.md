# cloudflare_purge_worker

You have to edit 3 parts of code.
1. your DNS zone ID
2. email address
3. Authentication Key

When you need to purge from your clients(Web/App), POST to your ClourFlare worker URL.
Body of POST request should include JSON data

{
  "files" : [ "https://example.com/1st.jpg", "https://example.com/2nd.jpg"]
}
