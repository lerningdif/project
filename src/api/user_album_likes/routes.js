const routes = (handler) => [
    {
      method: 'POST',
      path: '/albums/{id}/likes',
      handler: handler.postUser_album_likeHandler,
      options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'GET',
      path: '/albums/{id}/likes',
      handler: handler.getUser_album_likesHandler,
      options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'DELETE',
      path: '/albums/{id}/likes',
      handler:     handler.deleteUser_album_likeByIdHandler,
      options: {
      auth: 'openmusicapp_jwt',
    },
    },
  ];
  module.exports = routes;
