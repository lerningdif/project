const ClientError = require('../../exceptions/ClientError');
 
class User_album_likesHandler {
  constructor(user_album_likesService, playlistsService, validator) {
    this._user_album_likesService = user_album_likesService;
    this._playlistsService = playlistsService;
    this._validator = validator;
 
 
    this.postUser_album_likeHandler = this.postUser_album_likeHandler.bind(this);
    this.getUser_album_likesHandler = this.getUser_album_likesHandler.bind(this);
    this.deleteUser_album_likeByIdHandler = this.deleteUser_album_likeByIdHandler.bind(this);
  }
 
  async postUser_album_likeHandler(request, h) {
    this._validator.validateUser_album_likePayload(request.payload);
    const { Id } = request.params
 
    const {albumId} = request.payload
    const {id: userId} = request.auth.credentials   
    await this._user_album_likesService.verifyAlbum(albumId)
    await this._user_album_likesService.verifyUserAccess(albumId,userId)
    const user_album_likeId = await this._user_album_likesService.addUser_album_like({userId, albumId})
 
    const response = h.response({
      status: 'success',
      message: 'Menyukai album',
      data: {
       user_album_likeId,
      },
    });
    response.code(201);
    return response;
  }
 
  async getUser_album_likesHandler(request,h) {
    // const {albumId} = request.payload
 
    const {id: userId} = request.auth.credentials
    const {albumId} = request.params
    await this._playlistsService.verifyPlaylistAccess(playlistId,userId)
 
    const playlist = await this._user_album_likesService.getUser_album_likes(playlistId);
 
    return {
      status: 'success',
      data: {
        user
      }
    };
  }
 
 
async deleteUser_album_likeByIdHandler(request, h) {
 
  const { playlistId } = request.params;
  const {id: userId} = request.auth.credentials
  const {albumId} = request.payload
 
  this._validator.validateUser_album_likePayload(request.payload);
  await this._playlistsService.verifyPlaylistAccess(playlistId,userId)
 
  await this._user_album_likesService.deleteUser_album_likeById(userId, albumId);
  return {
      status: 'success',
      message: 'Batal menyukai album',
    };
}
}
 
 
module.exports = User_album_likesHandler;