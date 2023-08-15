
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");


function openModal(post) {
  const userInfo = post.querySelector(".main__userInfo-details");
  const userImage = post.querySelector(".main__userInfo-img").src;
  const postTitle = post.querySelector(".main__article-postTitle").textContent;
  const postContent = post.querySelector(".main__article-postContent").textContent;
  const likeCount = post.querySelector(".main__article-postLikeCount").textContent;

  

  const modalContent = `
    <div class="modal__userInfo">
    <img class="modal__userInfo-img" src="${userImage}" alt="User Image" />
    <div class="modal__userInfo-details>${userInfo.innerHTML}</div>
    <div class="modal__followContainer">
    <button class="modal__followBtn">Seguir</button>
    </div>
    </div>
    <h2 class="modal__postTitle">${postTitle}</h2>
    <p class="modal__postContent">${postContent}</p>
    <button id="closeModalBtn" class="modal__closeBtn">×</button>
    <div class="modal__likeContainer">
    <div class="modal__like">
      <img
        src="./src/assets/img/gray-heart.svg"
        alt="Empty Heart(Post not liked)"
        class="modal__likeHeart"
      />
      <small class="modal__likeCount">${likeCount}</small>
    </div>
  </div>
  `;

  modal.innerHTML = modalContent;
  modalBackdrop.style.display = "block";
  modal.showModal();


  const modalTitle = modal.querySelector(".modal__postTitle");
  modalTitle.classList.add("modal__customTitle");

  
  const closeModalButton = modal.querySelector("#closeModalBtn");
  closeModalButton.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal); 

    const likeButton = modal.querySelector(".modal__like");
    likeButton.addEventListener("click", toggleLike);
  
    const followButton = modal.querySelector(".modal__followBtn");
    followButton.addEventListener("click", toggleFollow);
    
 }


function closeModal() {
  modal.close();
  modalBackdrop.style.display = "none"; 
}

function toggleLike() {
    const likeHeart = modal.querySelector(".modal__likeHeart");
    const likeCount = modal.querySelector(".modal__likeCount");
    if (likeHeart.classList.contains("liked")) {
      likeHeart.src = "./src/assets/img/gray-heart.svg";
      likeHeart.classList.remove("liked");
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
      likeHeart.src = "./src/assets/img/red-heart.svg";
      likeHeart.classList.add("liked");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  }

  function toggleLikeNormal(post) {
    const likeHeart = post.querySelector(".main__article-postLikeHeart");
    const likeCount = post.querySelector(".main__article-postLikeCount");
  
    if (likeHeart.classList.contains("liked")) {
      likeHeart.src = "./src/assets/img/gray-heart.svg";
      likeHeart.classList.remove("liked");
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
      likeHeart.src = "./src/assets/img/red-heart.svg";
      likeHeart.classList.add("liked");
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  }
  
  function toggleFollow() {
    const followButton = modal.querySelector(".modal__followBtn");
    if (followButton.classList.contains("following")) {
        followButton.textContent = "Seguir";
        followButton.classList.remove("following");
    } else {
        followButton.textContent = "Seguindo";
        followButton.classList.add("following");
    }
  }
  
  function toggleFollowNormal(button) {
    if (button.classList.contains("following")) {
      button.textContent = "Seguir";
      button.classList.remove("following");
    } else {
      button.textContent = "Seguindo";
      button.classList.add("following");
    }
  }
  const openPostButtons = document.querySelectorAll(".main__article-actionOpenBtn");
  openPostButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const post = event.target.closest(".main__article-container");
      openModal(post);
    });
  });
  
   const likeButtons = document.querySelectorAll(".main__article-postLike");
   likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", (event) => {
    const post = event.target.closest(".main__article-container");
    toggleLikeNormal(post); 
  });
});

const followButtons = document.querySelectorAll(".main__userInfo-button");
followButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleFollowNormal(button);
  });
});

