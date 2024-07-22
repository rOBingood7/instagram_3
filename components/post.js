export function Post(item) {
  const post = document.createElement('div')
  const postHeader = document.createElement('div')
  const userInfo = document.createElement('div')
  const userAvatar = document.createElement('div')
  const userDetails = document.createElement('div')
  const nickname = document.createElement('span')
  const location = document.createElement('span')
  const postOptions = document.createElement('div')
  const postActions = document.createElement('div')
  const postActionsDiv = document.createElement('div')
  const like = document.createElement('button')
  const comment = document.createElement('button')
  const share = document.createElement('button')
  const save = document.createElement('button')
  const postLikes = document.createElement('div')
  const postLikesSpan = document.createElement('span')
  const postImage = document.createElement('div')
  const postCaptionNickname = document.createElement('span')
  const postCaption = document.createElement('div')
  const postCaptionText = document.createElement('p')
  const postComments = document.createElement('div')
  const viewComments = document.createElement('a')
  const commentDiv = document.createElement('div')
  const commentNickname = document.createElement('span')
  const commentText = document.createElement('span')
  const postTime = document.createElement('div')
  const postTimeSpan = document.createElement('span')
  const addComment = document.createElement('div')
  const commentInp = document.createElement('input')
  const commentBtn = document.createElement('button')
  const comment_box = document.createElement('div')

  post.classList.add('post')
  postHeader.classList.add('post-header')
  userInfo.classList.add('user-info')
  userAvatar.classList.add('user-avatar')
  userDetails.classList.add('user-details')
  nickname.classList.add('nickname')
  location.classList.add('location')
  postOptions.classList.add('post-options')
  postImage.classList.add('post-image')
  postActions.classList.add('post-actions')
  like.classList.add('like')
  comment.classList.add('comment')
  share.classList.add('share')
  save.classList.add('save')
  postLikes.classList.add('post-likes')
  postCaption.classList.add('post-caption')
  postCaptionNickname.classList.add('nickname')
  postComments.classList.add('post-comments')
  commentDiv.classList.add('comment')
  commentNickname.classList.add('nickname')
  postTime.classList.add('post-time')
  addComment.classList.add('add-comment')
  comment_box.classList.add('comment_box')

  nickname.innerHTML = 'nickname'
  location.innerHTML = 'City, Country'
  postLikesSpan.innerHTML = '8,888 likes'
  postCaptionNickname.innerHTML = 'nickname'
  postCaptionText.innerHTML = item.title
  viewComments.innerHTML = 'View all 33 comments'
  commentNickname.innerHTML = 'nickname'
  commentText.innerHTML = ' Lorem ipsum dolor sit amet'
  postTimeSpan.innerHTML = '1 hour ago'
  commentBtn.innerHTML = 'Post'
  commentInp.placeholder = 'Add a comment...'
  postImage.style.backgroundImage = `url(${item.url})`
 

  userDetails.append(nickname, location)
  userInfo.append(userAvatar, userDetails)
  postHeader.append(userInfo, postOptions)
  postActionsDiv.append(like, comment, share)
  postActions.append(postActionsDiv, save)
  postLikes.appendChild(postLikesSpan)
  postCaption.append(postCaptionNickname, postCaptionText)
  commentDiv.append(commentNickname, commentText)
  postComments.append(viewComments, commentDiv)
  postTime.appendChild(postTimeSpan)
  addComment.append(commentInp, commentBtn)
  post.append(postHeader, postImage, postActions, postLikes, postCaption, postComments, postTime, addComment)


  const dialog = document.querySelector('#post_dialog')
  const dialogImage = document.querySelector('#dialog_image');
  const closeDialog = document.querySelector('#close_dialog');
  const dialog_descr = document.querySelector('.dialog_descr');
  

    
  comment.onclick = () => {
    dialog.showModal()
    dialogImage.src = item.url
    dialog_descr.innerHTML = ""
    dialog_descr.append(postHeader, comment_box, postActions, postLikes, postCaption, postTime, addComment)
    comment_box.innerHTML = ""
  
    
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${item.id}`)
      .then(res => res.json())
      .then(comments => {
        for (let comment of comments) {
          comment_box.append(LI(comment))
        }
      })
    function LI(comment) {
      const li = document.createElement("li")
      li.innerHTML = comment.body
      return li 
    }
  }
  
  closeDialog.onclick = () => {
    dialog.close()
    dialog_descr.innerHTML = ""
  }


  
  
  return post
}
