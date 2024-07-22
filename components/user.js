export function User(item) {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('suggestion-item');

  const el = `
        <a href="./profile.html?id=${item.id}" >
        <div class="follow_item">
			<img src="./icons/Avatar.svg" alt="Suggestion Picture">
			<div class="user_profile">
				<span>${item.name}</span>
				<span>Suggestions For You</span>
            </div>

		</div>
    </a>
            
		<div class="follow">Follow</div>
    `

    mainDiv.innerHTML = el

  return mainDiv
}
