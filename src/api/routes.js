const routes = (handler) => [
    {
      method: 'POST',
      path: '/playlist_songs',
      handler: handler.postPlaylist_songHandler,
      options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'GET',
      path: '/playlist_songs',
      handler: (request, h) => handler.getPlaylist_songsHandler(request, h),
  options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'GET',
      path: '/playlist_songs/{id}',
      handler: handler.getPlaylist_songByIdHandler,
  options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'PUT',
      path: '/playlist_songs/{id}',
      handler: handler.putPlaylist_songByIdHandler,
  options: {
      auth: 'openmusicapp_jwt',
    },
    },
    {
      method: 'DELETE',
      path: '/playlist_songs/{id}',
      handler: handler.deletePlaylist_songByIdHandler,
  options: {
      auth: 'openmusicapp_jwt',
    },
    },
  ];
  
  module.exports = routes;