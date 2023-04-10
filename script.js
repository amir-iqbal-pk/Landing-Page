function changeImage() {
	var image = document.getElementById("myImage");
	if (image.src.match("./images/image1.jpg")) {
		image.src = "./images/image2.jpg";
	} else if (image.src.match("./images/image2.jpg")) {
		image.src = "./images/image3.jpg";
	} else {
		image.src = "./images/image1.jpg";
	}
}

function fetchData() {
	fetch("https://fakestoreapi.com/products")
		.then((response) => response.json())
		.then((data) => {
			const dataDiv = document.getElementById("data");
			const postsHTML = data
				.map(
					(post) => `
		<div class="card" key=${post.id}>
		<img src=${post.image} alt=${post.title} />
		<h2>${post.title}</h2>
		<p>Price: ${post.price}</p>
		<p>Category: ${post.category}</p>
        </div>
      `
				)
				.join("");
			dataDiv.innerHTML = postsHTML;
		})
		.catch((error) => console.error(error));
}
