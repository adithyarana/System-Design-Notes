# Networking Fundamentals

## 1. DNS (Domain Name System)

DNS internet ki phonebook ki tarah kaam karta hai. Ye domain name ko IP address mein resolve karne mein help karta hai.

### Kaise kaam karta hai

1. Tum browser mein `google.com` jaise domain name enter karte ho.
2. Browser ya operating system DNS se us domain ka IP address dhoondhta hai.
3. Browser us IP address par server se connect karta hai.

DNS results cache ho sakte hain, isliye har request par lookup zaroori nahi hota.

> **Interview takeaway:** DNS domain names ko IP addresses mein translate karta hai.

## 2. TCP vs. UDP

TCP (Transmission Control Protocol) aur UDP (User Datagram Protocol) network par data bhejne ke protocols hain, lekin dono ka behavior alag hai.

| Aspect | TCP | UDP |
|---|---|---|
| Data handling | Reliable, ordered byte stream | Datagrams bhejta hai; delivery aur order guaranteed nahi hote |
| Lost data | Lost data retransmit kar sakta hai | Automatic retransmission guarantee nahi karta |
| Connection | Connection establish karta hai | Connectionless hai |
| Common examples | HTTPS over TCP | Live voice/video aur online gaming mein commonly use hota hai |

### Yaad rakhne ka easy tareeka

- **TCP:** Aisi delivery service ki tarah jo data ko sahi order mein pahunchane ke liye checks karti hai.
- **UDP:** Jab speed important ho aur har packet ki delivery confirm karna zaroori na ho.

**Note:** HTTP/3, QUIC ke through UDP use karta hai. QUIC reliability aur encryption provide kar sakta hai.

### Key differences

| Feature | TCP | UDP |
|---|---|---|
| Nature | Connection-oriented; connection setup ke liye three-way handshake use karta hai | Connectionless; "fire-and-forget" |
| Reliability | Delivery aur order maintain karne ke liye acknowledgements aur retransmission use karta hai | Delivery, order, ya retransmission guarantee nahi karta |
| Speed | Extra checks aur flow control ki wajah se comparatively slower ho sakta hai | Lightweight hai aur comparatively faster ho sakta hai |
| Common uses | Web browsing, email, file transfers | Live video, VoIP, online gaming, DNS |

## 3. IP Addresses and Ports

IP address network par device ya server ko locate karne mein help karta hai. Port us machine par kisi particular application ya service tak pahunchne mein help karta hai.

| Example | Common use |
|---|---|
| `203.0.113.10` | Example IP address |
| Port `443` | Commonly HTTPS |
| Port `80` | Commonly HTTP |
| Port `5432` | PostgreSQL ka default port |

**Analogy:** IP building ka address hai, aur port us building ke andar particular office ka number.

## 4. TCP Handshake and TLS

TCP handshake aur TLS handshake alag processes hain.

### TCP three-way handshake

TCP connection establish karne ke liye:

1. Client → `SYN`
2. Server → `SYN-ACK`
3. Client → `ACK`

### TLS handshake

HTTPS mein TLS client aur server ko encryption parameters negotiate karne aur server certificate verify karne mein help karta hai. Iske baad application data encrypted form mein transfer hota hai.

> **Yaad rakho:** TCP connection establish karna aur TLS encryption setup karna same cheez nahi hain.

## 5. Latency vs. Bandwidth

| Term | Meaning |
|---|---|
| **Latency** | Data travel karke response aane mein lagne wala time |
| **Bandwidth** | Ek second mein transfer ho sakne wale data ki capacity |

- **Low latency:** Request ka response jaldi aata hai.
- **High bandwidth:** Badi file transfer karne ke liye zyada capacity available hoti hai.

## 6. Request-Response Cycle

Client-server communication ka normal flow:

1. Client request bhejta hai.
2. Server request validate karta hai.
3. Server business logic execute karta hai.
4. Zaroorat padne par server database query karta hai.
5. Server response bhejta hai.
6. Client response display karta hai.

## 7. Stateful vs. Stateless

| Type | Meaning | Example |
|---|---|---|
| **Stateful** | Server previous interactions ka session ya state maintain karta hai. | Server-side session ya shopping cart |
| **Stateless** | Har request ko process karne ke liye zaroori context request ke saath ya shared storage se available hota hai. Server previous request ki local memory par depend nahi karta. | Har request ke saath valid access token bhejne wali API |

### Examples and trade-offs

- **Stateful example:** Shopping cart mein server ko yaad rakhna hota hai ki user ne kaunse items add kiye hain.
- **Stateless example:** Har request ke saath authentication token bheja jaata hai, taaki server user ko identify kar sake.
- **Stateful trade-off:** Agar session ek hi server ki memory mein ho aur woh server fail ho jaaye, to session lose ho sakta hai. Multiple servers par scale karna bhi zyada challenging ho sakta hai.
- **Stateless benefit:** Multiple server instances par scale karna aam taur par easier hota hai, kyunki agla request kisi doosre instance par process ho sakta hai.

**Important:** Stateless ka matlab ye nahi ki application ke paas koi state hi nahi hoti. State database, cache, token, ya shared storage mein ho sakti hai.

## 8. HTTP and APIs

HTTP ek protocol hai jiske through client aur server web requests aur responses exchange karte hain. API ek defined interface hai jiske through software doosre software se communicate karta hai.

### HTTP methods

| Method | Meaning | Example |
|---|---|---|
| `GET` | Data read karna | Customers ki list fetch karna |
| `POST` | Resource create karna ya operation trigger karna | Naya customer create karna |
| `PUT` | Resource ko replace ya update karna | Customer details replace karna |
| `PATCH` | Resource ka partial update karna | Sirf phone number update karna |
| `DELETE` | Resource delete karna | Customer delete karna |

HTTP methods ka exact behavior API implementation par depend karta hai. `GET` ko generally safe aur `PUT`/`DELETE` ko idempotent design kiya jaata hai.

### HTTP status codes

| Code | Meaning | Example |
|---|---|---|
| `200` | OK | Data successfully fetch hua |
| `201` | Created | Customer create hua |
| `202` | Accepted | Background job queue mein accept hui |
| `400` | Bad Request | Input invalid hai |
| `401` | Unauthorized | Authentication missing ya invalid hai |
| `403` | Forbidden | User ke paas permission nahi hai |
| `404` | Not Found | Customer nahi mila |
| `429` | Too Many Requests | Rate limit exceed hui |
| `500` | Internal Server Error | Unexpected server error |

## 9. REST vs. GraphQL vs. gRPC

Ye APIs design karne ke different approaches hain.

| Approach | Kaise kaam karta hai | Example / common use |
|---|---|---|
| **REST** | Resources ko URLs aur HTTP methods ke through access karta hai. | `GET /api/customers/101`; public aur standard CRUD APIs |
| **GraphQL** | Client query mein specify karta hai ki kaunse fields chahiye. | Customer ka sirf name aur email fetch karna; complex frontend data needs |
| **gRPC** | Services ke beech strongly defined contracts aur efficient binary messaging use karta hai, commonly Protocol Buffers ke saath. | Internal microservice-to-microservice calls |

Koi ek approach universally best nahi hai. API consumers, performance needs aur system complexity ke according choose karein.

## 10. Authentication vs. Authorization

- **Authentication:** Tum kaun ho?
- **Authorization:** Tum kya kar sakte ho?

**Example:** Employee login karta hai — ye authentication hai. Uske baad check hota hai ki woh customer delete kar sakta hai ya nahi — ye authorization hai.

**Note:** JWT ek token format hai jo claims carry kar sakta hai. JWT use karne se authorization checks automatically solve nahi hote.

## 11. Pagination and Rate Limiting

### Pagination

Data ko chhote parts ya pages mein return karna.

```http
GET /api/customers?page=2&limit=20
```

Isse API ek baar mein saare 50,000 customers return karne ke bajaye ek page return kar sakti hai.

### Rate limiting

Ek user ya client ke liye given time window mein requests ki limit set karna.

**Example:** 100 requests per minute. Limit exceed hone par API `429 Too Many Requests` return kar sakti hai.

> **Key difference:** Pagination response size control karti hai; rate limiting request frequency control karti hai. Dono alag problems solve karte hain.

## 12. Non-Functional Requirements (NFRs)

Functional requirements batati hain ki system **kya** karta hai. Non-functional requirements batati hain ki system **kitni achhi tarah** kaam karta hai.

**Example:**

- **Functional:** CRM customer create kar sake.
- **Non-functional:** CRM 10,000 concurrent users ke saath acceptable response time maintain kare.

### 12.1 Scalability

System badhte load ko handle kar sake.

**Example:** CRM pehle 100 users handle karta tha; ab use 10,000 users handle karne hain.

| Approach | Kaise scale karta hai | Example |
|---|---|---|
| **Vertical scaling** | Ek server ko zyada CPU ya RAM dena | 2 CPU / 4 GB RAM se 8 CPU / 16 GB RAM |
| **Horizontal scaling** | Multiple server instances add karna | Server 1 + Server 2 + Server 3 |

### 12.2 Availability

System kitne samay tak operational aur accessible rehta hai.

**Example:** 99.9% monthly availability ka target matlab 30-day month mein approximately 43 minutes ka downtime budget.

Availability improve karne ke methods:

- Multiple server instances
- Health checks aur load balancing
- Automatic recovery
- Database backups aur failover

### 12.3 Reliability

System expected result consistently aur correctly deliver kare, failures handle kare aur recover kar sake.

**Example:** Invoice generate karte waqt server fail ho jaaye, toh system job recover karke invoice dobara generate kar sake bina duplicate invoice banaye.

Reliability ke liye retries, error handling, idempotency aur monitoring important hain.

### 12.4 Performance

System kitni jaldi kaam karta hai aur kitna load efficiently handle karta hai.

Important measurements:

- **Latency:** Ek request ka response time.
- **Throughput:** Ek second mein process hone wali requests ya jobs ki sankhya.
- **Resource usage:** CPU, memory, database connections, etc.

**Example:** CRM customer API ka p95 latency 300 ms hai. Iska matlab approximately 95% measured requests 300 ms ya usse kam mein complete hui.

Performance improve karne ke liye indexing, caching, query optimization aur efficient algorithms use kiye ja sakte hain.

### 12.5 Durability

Data successfully save hone ke baad system failure ke baad bhi available rahe aur lose na ho.

**Example:** Customer ka invoice PDF object storage mein successfully save ho gaya. Server restart hone ke baad bhi PDF available rehni chahiye.

Durability improve karne ke tareeke:

- Persistent database ya storage
- Replication
- Backups
- Correct write confirmations

### Availability vs. Reliability vs. Durability

| Term | Simple question |
|---|---|
| **Availability** | Kya system accessible hai? |
| **Reliability** | Kya system sahi aur consistently kaam karta hai? |
| **Durability** | Kya saved data safe rehta hai? |
| **Performance** | System kitni jaldi kaam karta hai? |
| **Scalability** | Load badhne par kya system use handle kar sakta hai? |