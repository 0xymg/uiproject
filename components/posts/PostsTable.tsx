import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import posts from "@/data/posts";
import Link from "next/link";
import { Button } from "../ui/button";
import { Post } from "@/types/posts";

interface PostProps {
    limit?: number,
    title?: string,
}

const PostsTable = ({limit, title} : PostProps) => {
    //Sorting options
    const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // filter posts
    const filteredPosts = limit? sortedPosts.slice(0, limit) : sortedPosts;

    return (<>

        <Table className="w-full">
            <TableHeader>
                <TableRow>
                    <TableHead> Code </TableHead>
                    <TableHead className="hidden sm:table-cell">Country</TableHead>
                    <TableHead className="text-right">How many times?</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredPosts.map( (post) => (

                    <TableRow key={post.id}>
                        <TableCell> {post.title}</TableCell>
                        <TableCell> {post.author}</TableCell>
                        <TableCell className="text-right"> {post.date}</TableCell>
                        <TableCell className=""> 
                            <Link href={`/posts/edit/${post.id}`}>
                                <Button className='bg-primary hover:bg-slate-700 text-white font-bold rounded-none py-2 px-4 text-xs'>
                                    Edit
                                </Button>
                            </Link>
                        </TableCell>
                    </TableRow>

                ))}
            </TableBody>
        </Table>

    </>);
}

export default PostsTable;