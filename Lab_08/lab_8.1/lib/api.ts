import { Post, Author } from "@/types";

const authors: Author[] = [
	{ 
		id: "1",
		name: "John Doe",
		bio: "John is a seasoned writer with over a decade of experience in the tech industry. He has a passion for breaking down complex topics into easy-to-understand articles.",
		avatar: "https://www.freepik.com/free-photo/fun-party-with-dj_113177336.htm#fromView=serie&page=1&position=0&from_element=series_block"
	},

	{
		id: "2",
		name: "Jane Smith",
		bio: "Jane is a creative storyteller who specializes in lifestyle and travel content. Her engaging writing style captivates readers and transports them to new places.",
		avatar: "https://www.freepik.com/free-photo/fun-party-with-dj_113177352.htm#fromView=serie&page=1&position=3&from_element=series_block"
	}
];

const posts: Post[] = [
	{
		id: "1",
		title: "The Ultimate Guide to JavaScript Frameworks",
		content: "In this comprehensive guide, we will explore the most popular JavaScript frameworks, including React, Angular, and Vue. We will discuss their features, advantages, and use cases to help you choose the right one for your next project.",
		author: "1",
		date: "2024-06-01",
		tags: ["JavaScript", "Frameworks", "Web Development"],
		readTime: 10
	},

	{
		id: "2",
		title: "10 Tips for Traveling on a Budget",
		content: "Traveling doesn't have to break the bank. In this article, we share 10 practical tips for traveling on a budget, from finding affordable accommodations to discovering free activities in popular destinations.",
		author: "2",
		date: "2024-06-05",
		tags: ["Travel", "Budget Travel", "Tips"],
		readTime: 7
	}
];

export async function getAllPosts(): Promise<Post []> {
	return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
	return posts.find((p) => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
	return authors.find((a) => a.id === id);
}