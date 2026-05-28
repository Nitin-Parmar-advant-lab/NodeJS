# REST API
- Representational State Transfer (REST)
- Transfer Data instead of User Interfaces

1. REST Concepts & Ideas
- Data-Centric: REST APIs focus on data exchange; they do not handle or exchange UI logic.
- Structure: They function as standard servers (e.g., Node.js) exposing endpoints defined by an HTTP method and a path.
- Format: JSON is the primary data format used for both requests and responses.
- Decoupled: The API and the clients using them are independent of one another.

2. Requests & Responses
- Headers: When sending JSON data, the Content-Type header must be set to inform the receiving end of the format.
- CORS: Cross-Origin Resource Sharing (CORS) errors happen if the API does not explicitly set the required CORS headers to allow client access.


## CORS
- Cross Origin Resource Sharing

Understanding the Note
CORS controls how resources (like data from an API) are shared between different origins. An origin is defined by three components: Protocol (http/https), Domain (localhost, google.com), and Port (:3000, :4000). 

1. Successful Request (Same-Origin)
- Scenario: A client at localhost:3000 requests data from a server at localhost:3000.
- Result: The request is allowed (Green Arrow).
- Reason: Since the port numbers match, they share the same origin. Browsers allow these requests by default. 

2. Failed Request (Cross-Origin Error)
- Scenario: A client at localhost:4000 requests data from a server at localhost:3000.
- Result: A CORS Error occurs (Red Arrow).
- Reason: Even though both use "localhost," the ports are different (:4000 vs :3000), making them "Cross-Origin". The browser blocks the request to prevent potential security risks like unauthorized data access.

