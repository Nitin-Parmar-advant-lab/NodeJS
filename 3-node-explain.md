# Single Thread, Event Loop & Blocking Code

- Node is uses Single JS Thread

# Single Thread

- NodeJS start Event Loop when Program execution starts
- This event loop is responsible to handle event callbacks (callbacks are async function),
- although Event Loop does not handle the async tasks, it handle it after those code get executed (callbacks only)
- Basically the event loop will only handle callbacks that contain fast singishing code.

- Other long taking operations are sent to a worker pool, which ia also spun up and managed by nodeJS
- This worker pool do all the heavy lifting.
- Thsi worker pool is kind of totally detached of JS code normal execution, it work on Diffrent Threads
- Ones worker done (like getting data from network api call, or file write is done) it will trigger the callback for that read file operation, and since the event loop is responsible fot the evnts and the callbacks, so this will end ups into event loop

- It's keeps on waiting for new events and which does somthing when some event happens and then dispatches some actions to the oprating system and then again frees up the thread.

# Event Loop
- Loop which is run or started by nodeJs that keeps the nodejs process running and handles all the callbacks (it's loop that keep ongoing untill their is event or event lister)
- It has a certain order in which it goes through the callbacks,

1. At the beginning of each new iteration it checks if there are any timers callbacks should execute. (timer callbacks are those function which we have set in the setTimeout or setIntervals for execution after those time)

2. Then it will check other call pending callbacks, like write or read file callbacks, in short execture I/O - related callbacks that were deferred (I/O means any input & output, Disk & network operations ~ Blocking operations)
- It's important to note that nodeJS will leave that phase at a certain point of time and that can also mean that if there are too many outstanding callbacks, it will continue its loop itrantion and postpone thesee callbacks to the next iteration

3. After that it will enter a Poll Phase, in which node will look for new IO events, it will check the timer callback also, it their is not then it will move forward and available then it will 

4. This is Check phase where SetImmediate callbacks where executed,

5. Close Callbacks
- execture all "close" event callbacks like connection close or server close or short of 

And after all this, nodeJs execution stop is their is not any events are pending, 