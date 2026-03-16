import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Post, Author } from "@/types";
import { getPostById, getAllPosts, getAuthorById } from "@/lib/api";

interface PostProps {
  post: Post;
  author: Author;
}

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {author.name}</p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async ({ params }) => {
  const postId = params?.id;
  if (!postId) {
    return { notFound: true };
  }

  const post = await getPostById(postId);
  if (!post) {
    return { notFound: true };
  }

  const author = await getAuthorById(post.author);
  if (!author) {
    return { notFound: true };
  }

  return {
    props: { post, author },
    revalidate: 60,
  };
};