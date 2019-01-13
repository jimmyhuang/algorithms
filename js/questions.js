# Multi-threading

Javascript is single-threaded. To achieve asynchronous behavior, Javascript uses setTimeOut() and setInterval(), as well as event handlers which are asynchronous by nature. 

Now, HTML5 is bringing us true multi-threading capability via **Web Workers**. These little fellas are ideal for running scripts in background threads, so that they don't interfere with the user interface (UI).

An example of using it to calculate a large and accurate value like pi.

One limitation is that Web Workers cannot access the DOM, so they can't read or modify the HTML document. In addition, they can't access any global variables or JavaScript functions within the main page. Lastly, the Web Worker must be stored in a separate file.

The worker and the parent page communicate using messaging. Each can add a listener to the onmessage() event to receive messages from the other. As we saw in the script above, messages are sent via the postMessage() method.

Node.js is non-blocking and supports forking multiple processes even though it is single-threaded.

![Event Loop](https://cdn-images-1.medium.com/max/1000/1*evOcy9n3vslkDt0Mj8mBYw.jpeg "Event Loop")