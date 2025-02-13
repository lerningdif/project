const ClientError = require('../../exceptions/ClientError');

class Playlist_songsHandler {
  constructor(playlist_songsService, playlistsService, validator) {
    this._playlist_songsService = playlist_songsService;
    this._playlistsService = playlistsService;
    this._validator = validator;
   

    this.postPlaylist_songHandler = this.postPlaylist_songHandler.bind(this);
    this.getPlaylist_songsHandler = this.getPlaylist_songsHandler.bind(this);
    this.getPlaylist_songByIdHandler = this.getPlaylist_songByIdHandler.bind(this);
    this.putPlaylist_songByIdHandler = this.putPlaylist_songByIdHandler.bind(this);
    this.deletePlaylist_songByIdHandler = this.deletePlaylist_songByIdHandler.bind(this);
  }

  async postPlaylist_songHandler(request, h) {
    this._validator.validatePlaylist_songPayload(request.payload);
    const { playlist_id } = request.params
    
    const {song_id} = request.payload
    const {id: userId} = request.aut.credentials   
    await this._playlist_songsService.verifySong(song_id)
    await this._playlistsService.verifyPlaylistAccess(playlist_id,userId)
    const playlist_songId = await this._playlist_songservice.postPlaylist_songHandler({playlist_id, song_id})

    const response = h.response({
      status: 'success',
      message: 'Playlist_song berhasil ditambahkan',
      data: {
       playlist_songId,
      },
    });
    response.code(201);
    return response;
  }

  async getPlaylist_songsHandler(request,h) {
    const {id: song_id} = request.auth.credentials
     const playlist_songs = await this._service.getPlaylist_songs(song_id);

    return {
      status: 'success',
      data: {
        playlist_songs
      }
    };
  }

async getPlaylist_songByIdHandler(request, h) {
    const { id } = request.params;
    const playlist_song = await this._service.getPlaylist_songById(id);
    return {
      status: 'success',
      data: {
        playlist_song,
      },
    };
  } 

async putPlaylist_songByIdHandler(request, h) {
    this._validator.validatePlaylist_songPayload(request.payload);
    const { id } = request.params;

    await this._service.editPlaylist_songById(id, request.payload);

    return {
      status: 'success',
      message: 'Playlist_song berhasil diperbarui',
    };
  } 

async deletePlaylist_songByIdHandler(request, h) {
    const { id } = request.params;
    await this._service.deletePlaylist_songById(id);
    return {
      status: 'success',
      message: 'Playlist_song berhasil dihapus',
    };
}
}


module.exports = Playlist_songsHandler;
