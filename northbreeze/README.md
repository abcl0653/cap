# Test insert against readonly

```bash
curl -d @category.json -H "Content-Type: application/json" "http://localhost:4004/breeze/Categories"

# Result 
{"error":{"code":"405","message":"Method Not Allowed"}}
```
