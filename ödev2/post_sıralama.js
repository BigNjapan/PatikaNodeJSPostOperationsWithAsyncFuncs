const posts = [
	{ id: 1, title: "Post 1", content: "Post 1 içeriği" },
	{ id: 2, title: "Post 2", content: "Post 2 içeriği" },
	{ id: 3, title: "Post 3", content: "Post 3 içeriği" },
];

// Postları listeleyen fonksiyon
const listPosts = () => {
	posts.map((post) => {
		console.log(`ID: ${post.id} - ${post.title}\n${post.content}\n`);
	});
};

// Yeni post ekleme fonksiyonu
const addPost = (newPost) => {
	return new Promise((resolve, reject) => {
		if (newPost) {
			posts.push(newPost);
			resolve("Yeni post eklendi");
		} else {
			reject("Post eklenirken bir hata oluştu");
		}
	});
};

// Async fonksiyon ile işlemleri sıralı yapma
async function processPosts() {
	try {
		console.log("Mevcut Postlar:");
		listPosts();

		// Yeni post ekleme
		const newPost = {
			id: 4,
			title: "Post 4",
			content: "Post 4 içeriği",
		};

		await addPost(newPost);

		console.log("\nYeni post eklendikten sonra tüm postlar:");
		listPosts();
	} catch (error) {
		console.log("Hata:", error);
	}
}

// Fonksiyonu çalıştır
processPosts();
