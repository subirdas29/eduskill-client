import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/k3frSSy/Ylc2de-IBk.png" className="w-[400px] h-[400px] shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">what is `cors`</h1>
                        <p className="py-6">Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell the browser to let a web application running at one origin(domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.<br></br>

                            <span className='font-bold'>An example of a cross-origin request is:</span><br></br>

                            We always have a separated server and client in our project. Now client and server both communicate with each other. If both server and client running on the same host, then communication is there without any error.<br></br>
                            This is the security mechanism as no one should be able to access the data on the server or its resources if you are not running on the same server. So, if this type of request is there on different servers, this will give up an error called CORS error.<br></br>
                            CORS error can be resolved by setting up headers. The HTTP headers that relate to CORS are:<br></br>

                            Request Headers: These headers are used by clients when issuing HTTP requests to make use of cross-origin sharing feature. These headers are set when a client requests to the server.<br></br>
                            1.Origin: This header indicates the origin of the cross-site access request or preflight request. The origin is a URI which indicates the server from which the request is initiated. In any access control request, the Origin header is always present.<br></br>
                          
                        </p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/m9thq1B/hero-1.png" className="w-[400px] h-[400px] shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                        <p className="py-6">
                        For most developers, building an authentication system for your app can feel a lot like paying taxes. They are both relatively hard to understand tasks that you have no choice but doing, and could have big consequences if you get them wrong. No one ever started a company to pay taxes and no one ever built an app just so they could create a great login system. They just seem to be inescapable costs. <br />

But now, you can at least free yourself from the auth tax. With Firebase Authentication, you can outsource your entire authentication system to Firebase so that you can concentrate on building great features for your app. Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system. It offers a straightforward getting started experience, optional UX components designed to minimize user friction, and is built on open standards and backed by Google infrastructure.<br />

Implementing Firebase Authentication is relatively fast and easy. From the Firebase console, just choose from the popular login methods that you want to offer (like Facebook, Google, Twitter and email/password) and then add the Firebase SDK to your app. Your app will then be able to connect securely with the real time database, Firebase storage or to your own custom back end. If you have an auth system already, you can use Firebase Authentication as a bridge to other Firebase features.<br />

                        </p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Y0mzRYp/hero.png" className="w-[400px] h-[400px] shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">How does the private route work?</h1>
                        <p className="py-6">Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                        <br />
                        We will start off with a minimal React project that uses React Router to navigate a user from one page to another page. In the following function component, we have matching Link and Route components from React Router for various routes. Furthermore, we have a so-called Index Route loaded with the Landing component and a so-called No Match Route loaded with inline JSX. Both act as fallback routes.We protected our first React component with React Router. However, this approach does not scale, because we would have to implement the same logic in every protected route. In addition, the redirect logic should not reside in the Home component itself but as a best practice protect it from the outside instead. 
                        </p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/ggx9G4s/what-is-node-js-featured-image-1200x675.jpg" className="w-[400px] h-[400px] shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">What is Node? How does Node work?</h1>
                        <p className="py-6">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />

Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

Node.js basically works on two concept <br />

Non-blocking I/O <br />
Non-blocking I/o: Non-blocking i/o  means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works. <br />



</p>

                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Blogs;