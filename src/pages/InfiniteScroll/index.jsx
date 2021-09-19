import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
// import Comment from "./components/Comment";
// import Loader from "./components/Loader";
// import EndMsg from "./components/EndMsg"; https://github.com/coderspirit-git/infinite-scroll-react

function InfiniteScrolls() {
    const [items, setItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(2);

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`
                // For json server use url below
                // `http://localhost:3004/comments?_page=1&_limit=20`
            );
            const data = await res.json();
            setItems(data);
        };

        getComments();
    }, []);

    const fetchComments = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
            // For json server use url below
            // `http://localhost:3004/comments?_page=${page}&_limit=20`
        );
        const data = await res.json();
        return data;
    };

    const fetchData = async () => {
        const commentsFormServer = await fetchComments();
        setItems([...items, ...commentsFormServer]);
        if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
            sethasMore(false);
        }
        setpage(page + 1);
    };

    const styleText = {
        maxWidth: "400px",
        background: "darkorange",
        padding: "40px",
        marginRight: "auto",
        marginLeft: "auto"
    }

    return (
        <>
            <div className="jumbotron text-center">
                <h1>Infinite Scroll</h1>
                <p>Enhance your skills in React and React Native !</p>
            </div>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={hasMore}
            // loader={<Loader />}
            // endMessage={<EndMsg />}
            >
                <div className="container">
                    <div className="row m-2">
                        {items.map((item) => {
                            return <p key={item.id} style={styleText}>{item.name}</p>;
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

export default InfiniteScrolls;