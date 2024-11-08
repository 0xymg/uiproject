import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
    return ( <>
        <BackButton text="Go Back" link="/" />
        <h2 className="font-bold mb-3">Posts</h2>
        <PostsTable />
        <PostsPagination/>
    </>);
}
 
export default PostsPage;