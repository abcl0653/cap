# Test insert against readonly

```bash
curl -d @category.json -H "Content-Type: application/json" "http://localhost:4004/breeze/Categories"

# Result
{"error":{"code":"405","message":"Method Not Allowed"}}
```

```bash
curl -d @order.json -H "content-Type: application/json" "http://localhost:4004/restricted/Orders"

# Result
{"@odata.context":"$metadata#Orders/$entity","@odata.metadataEtag":"W/\"GP5uNaK2vuzOs4d+xbe4E8RSgwCYHnoz/xVBfTDcZes=\"","modifiedAt":null,"modifiedBy":null,"ID":"027765ec-51b9-41a1-9f18-856e037c7811","quantity":42}

```

change ~/.zshrc add ```bindkey -v```
