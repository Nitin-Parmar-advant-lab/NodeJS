- Node.js uses a small number of threads to handle many clients. In Node.js there are two types of threads: 
1. one Event Loop (aka the main loop, main thread, event thread, etc.), 
2. and a pool of k Workers in a Worker Pool (aka the threadpool).

If a thread is taking a long time to execute a callback (Event Loop) or a task (Worker), we call it "blocked". While a thread is blocked working on behalf of one client, it cannot handle requests from any other clients.

# Node.js uses the Event-Driven Architecture: it has an Event Loop for orchestration and a Worker Pool for expensive tasks.

1. Node.js applications first complete an initialization phase, require'ing modules and registering callbacks for events.
2. Node.js applications then enter the Event Loop, responding to incoming client requests by executing the appropriate callback. This callback executes synchronously, and may register asynchronous requests to continue processing after it completes.
3. The callbacks for these asynchronous requests will also be executed on the Event Loop.
- The Event Loop will also fulfill the non-blocking asynchronous requests made by its callbacks, e.g., network I/O.

4. Node.js uses the Worker Pool to handle "expensive" tasks. 
These are the Node.js module APIs that make use of this Worker Pool:

I/O-intensive
DNS: dns.lookup(), dns.lookupService().
File System: All file system APIs except fs.FSWatcher()
CPU-intensive
Crypto: crypto.pbkdf2(), crypto.scrypt(), crypto.randomBytes(), crypto.randomFill(), crypto.generateKeyPair().
Zlib: All zlib APIs except those that are explicitly synchronous use libuv's threadpool.

---

# Event Loop and the Worker Pool maintain queues for pending events and pending tasks, respectively.

if a thread blocks handling one client's request, then pending client requests may not get a turn until the thread finishes its callback or task. The fair treatment of clients is thus the responsibility of your application. This means that you shouldn't do too much work for any client in any single callback or task

[read this][def]

[def]: link:https://share.google/aimode/ozRXPCOlkzhwdNT1t