import os, requests

data = requests.get("https://69f379b9bd2396bf531011d7.mockapi.io/api/v1/products")

print("Status:", data.status_code)
print("Content-Type:", data.headers.get("Content-Type"))
print("Response:")
print(data.text)