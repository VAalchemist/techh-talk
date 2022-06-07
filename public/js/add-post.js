async function createPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      body
    }),

    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard/new');
};

document.querySelector('#new-post').addEventListener('submit', newFormHandler);